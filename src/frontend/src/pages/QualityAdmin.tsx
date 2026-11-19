import { useEffect, useState } from "react";
import { BUCKET, supabase } from "../lib/supabase";

type Report = { id: string; product_name: string; batch_number: string; report_name: string; file_path: string; is_published: boolean };
export default function QualityAdmin() {
  const [user, setUser] = useState<string|null>(null);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [product,setProduct]=useState("Moringa Leaf Powder");
  const [batch,setBatch]=useState("");
  const [reportName,setReportName]=useState("");
  const [file,setFile]=useState<File|null>(null);
  const [published,setPublished]=useState(false);
  const [records,setRecords]=useState<Report[]>([]);
  const [status,setStatus]=useState("");
  const [busy,setBusy]=useState(false);
  useEffect(()=>{
    document.title="Quality Reports Admin | Bio Peri Posa";
    if(!supabase) return;
    supabase.auth.getUser().then(({data})=>setUser(data.user?.id||null));
    const {data:subscription}=supabase.auth.onAuthStateChange((_event,session)=>setUser(session?.user?.id||null));
    return ()=>subscription.subscription.unsubscribe();
  },[]);
  async function refresh(){
    if(!supabase) return;
    const {data,error}=await supabase.from("quality_reports").select("id,product_name,batch_number,report_name,file_path,is_published").order("uploaded_at",{ascending:false});
    if(error) {setStatus(error.message);return;}
    setRecords(data||[]);
  }
  useEffect(()=>{if(user) void refresh(); else setRecords([]);},[user]);
  async function login(e:React.FormEvent){
    e.preventDefault(); if(!supabase)return;
    setBusy(true);setStatus("");
    const {error}=await supabase.auth.signInWithPassword({email,password});
    setBusy(false);if(error)setStatus(error.message);
  }
  async function upload(e:React.FormEvent){
    e.preventDefault(); if(!supabase||!file||!batch.trim()||!reportName.trim())return;
    setBusy(true);setStatus("");
    // Keep all formats; the storage path is random and does not trust the uploaded filename.
    const safeName=file.name.replace(/[^a-zA-Z0-9._-]/g,"_").slice(-120);
    const path=`${crypto.randomUUID()}/${safeName||"laboratory-report"}`;
    const {error:storageError}=await supabase.storage.from(BUCKET).upload(path,file,{upsert:false,contentType:file.type||"application/octet-stream"});
    if(storageError){setStatus(storageError.message);setBusy(false);return;}
    const {error:dbError}=await supabase.from("quality_reports").insert({product_name:product,batch_number:batch.trim(),report_name:reportName.trim(),file_path:path,is_published:published});
    if(dbError){
      await supabase.storage.from(BUCKET).remove([path]);
      setStatus(dbError.message);setBusy(false);return;
    }
    setStatus("Report uploaded successfully.");setFile(null);setReportName("");setBusy(false);await refresh();
  }
  async function toggle(r:Report){
    if(!supabase)return;
    const {error}=await supabase.from("quality_reports").update({is_published:!r.is_published}).eq("id",r.id);
    setStatus(error?error.message:"Publication status updated.");await refresh();
  }
  async function remove(r:Report){
    if(!supabase||!window.confirm("Permanently delete this report?"))return;
    // Delete metadata first so customers immediately lose access.
    const {error}=await supabase.from("quality_reports").delete().eq("id",r.id);
    if(error){setStatus(error.message);return;}
    const {error:storageError}=await supabase.storage.from(BUCKET).remove([r.file_path]);
    setStatus(storageError?"Record deleted, but file cleanup failed: "+storageError.message:"Report deleted.");
    await refresh();
  }
  return <div className="min-h-[65vh] bg-brand-cream px-4 pt-32 pb-20"><div className="max-w-3xl mx-auto">
    <h1 className="font-serif text-4xl mb-5">Quality Reports Administration</h1>
    {!supabase?<p>Supabase configuration is missing.</p>:!user?
      <form onSubmit={login} className="bg-white p-6 rounded-xl border space-y-4">
        <p>Authorized administrators only.</p>
        <label className="block">Email<input type="email" className="w-full border rounded-lg p-3 mt-2" required value={email} onChange={e=>setEmail(e.target.value)}/></label>
        <label className="block">Password<input type="password" className="w-full border rounded-lg p-3 mt-2" required value={password} onChange={e=>setPassword(e.target.value)}/></label>
        <button disabled={busy} className="btn-primary">Sign in</button>
      </form>:
      <div className="space-y-8">
        <div className="flex justify-between items-center"><p className="text-sm">Signed in. Upload permissions are enforced by Supabase policies.</p><button className="underline" onClick={()=>supabase.auth.signOut()}>Sign out</button></div>
        <form onSubmit={upload} className="bg-white p-6 rounded-xl border space-y-4">
          <h2 className="font-serif text-2xl">Upload laboratory report</h2>
          <label className="block">Product<select className="w-full border rounded-lg p-3 mt-2" value={product} onChange={e=>setProduct(e.target.value)}><option>Moringa Leaf Powder</option><option>Ashwagandha Root Powder</option></select></label>
          <label className="block">Batch number<input required className="w-full border rounded-lg p-3 mt-2" value={batch} onChange={e=>setBatch(e.target.value)}/></label>
          <label className="block">Report name<input required className="w-full border rounded-lg p-3 mt-2" value={reportName} onChange={e=>setReportName(e.target.value)} placeholder="e.g. Heavy metals test"/></label>
          <label className="block">Lab file (any format)<input type="file" required className="block w-full mt-2" onChange={e=>setFile(e.target.files?.[0]||null)}/></label>
          <label className="flex gap-2 items-center"><input type="checkbox" checked={published} onChange={e=>setPublished(e.target.checked)}/> Publish for customers immediately</label>
          <button disabled={busy||!file} className="btn-primary">Upload report</button>
        </form>
        <section className="space-y-3"><h2 className="font-serif text-2xl">Uploaded reports</h2>
          {records.map(r=><div className="bg-white border rounded-xl p-4 flex flex-wrap justify-between gap-3" key={r.id}>
            <div><strong>{r.report_name}</strong><p className="text-sm">{r.product_name} · {r.batch_number}</p><p className="text-sm">{r.is_published?"Published":"Unpublished"}</p></div>
            <div className="flex gap-3 items-center"><button className="underline" onClick={()=>toggle(r)}>{r.is_published?"Unpublish":"Publish"}</button><button className="underline text-red-700" onClick={()=>remove(r)}>Delete</button></div>
          </div>)}
        </section>
      </div>}
    {status&&<p role="status" className="mt-5">{status}</p>}
  </div></div>;
}
