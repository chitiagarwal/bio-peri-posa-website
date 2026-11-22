import { useEffect, useState } from "react";
import { BUCKET, configured, supabase } from "../lib/supabase";

type Report = { id: string; product_name: string; batch_number: string; report_name: string; file_path: string; uploaded_at: string };
export default function QualityReports() {
  const [product, setProduct] = useState("Moringa Leaf Powder");
  const [batch, setBatch] = useState("");
  const [reports, setReports] = useState<Report[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => { document.title = "Batch Quality Reports | Bio Peri Posa"; }, []);
  async function search(e: React.FormEvent) {
    e.preventDefault();
    setReports([]);
    if (!supabase) { setMessage("Report verification is being configured. Please check back soon."); return; }
    if (!batch.trim()) { setMessage("Please enter the batch number printed on your package."); return; }
    setLoading(true); setMessage("");
    const { data, error } = await supabase.from("quality_reports").select("id,product_name,batch_number,report_name,file_path,uploaded_at").eq("product_name", product).ilike("batch_number", batch.trim()).eq("is_published", true).order("uploaded_at", { ascending: false });
    setLoading(false);
    if (error) { setMessage(`Report lookup failed (${error.code || "unknown"}): ${error.message}${error.hint ? `; ${error.hint}` : ""}`); return; }
    setReports(data || []);
    if (!data?.length) setMessage("No published reports found for this product and batch. Please check the number or contact us.");
  }
  async function view(report: Report) {
    if (!supabase) return;
    const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(report.file_path, 120);
    if (error || !data?.signedUrl) { setMessage("This file cannot be opened right now. Please contact Bio Peri Posa."); return; }
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  }
  return <div className="min-h-[65vh] bg-brand-cream px-4 pt-32 pb-20">
    <div className="max-w-3xl mx-auto">
      <p className="text-brand-green text-sm font-semibold uppercase tracking-widest">Quality & Traceability</p>
      <h1 className="font-sans font-extrabold text-4xl md:text-5xl mt-3 mb-5">Quality begins at the source</h1>
      <p className="text-lg text-[#36583d] leading-relaxed mb-5">We prioritise raw materials sourced from organic farms and manufacturing in certified organic facilities. Our approach focuses on botanical identity, freshness, careful processing and traceable documentation.</p>
      <div className="grid sm:grid-cols-2 gap-4 mb-8"><div className="rounded-2xl bg-white border border-[#cbe8bd] p-5"><h2 className="font-bold text-xl text-[#17442f]">Organic sourcing</h2><p className="mt-2 text-[#36583d]">Farm and supplier documentation helps us assess ingredient origin and handling.</p></div><div className="rounded-2xl bg-white border border-[#cbe8bd] p-5"><h2 className="font-bold text-xl text-[#17442f]">Certification and testing</h2><p className="mt-2 text-[#36583d]">Our quality programme includes organic sourcing standards and batch-specific testing.</p></div></div>
      <div className="rounded-2xl bg-[#e5f6d6] border border-[#b5df9e] p-6 mb-9"><p className="text-sm font-bold uppercase tracking-wide text-[#386b34] mb-2">Bio Periposa organic certification details</p><h2 className="text-2xl font-extrabold text-[#17442f] mb-3">BIO PERIPOSA PRIVATE LIMITED</h2></div>
      <h2 className="font-bold text-3xl text-[#17442f] mb-4">Verify your batch</h2>
      <p className="text-muted-foreground mb-8">Select your product and enter the batch number printed on your package to view available laboratory reports. Only published reports are displayed.</p>
      <form onSubmit={search} className="bg-white rounded-2xl border p-6 space-y-5 shadow-sm">
        <label className="block font-semibold">Product
          <select className="mt-2 w-full rounded-lg border p-3 bg-white" value={product} onChange={e=>setProduct(e.target.value)}>
            <option>Moringa Leaf Powder</option><option>Ashwagandha Root Powder</option>
          </select>
        </label>
        <label className="block font-semibold">Batch number
          <input className="mt-2 w-full rounded-lg border p-3" value={batch} onChange={e=>setBatch(e.target.value)} placeholder="Enter batch number" maxLength={100} required />
        </label>
        <button type="submit" disabled={loading || !configured} className="btn-primary disabled:opacity-50">{loading ? "Searching..." : "Find Quality Reports"}</button>
        {!configured && <p className="text-sm text-muted-foreground">Quality verification will be available shortly.</p>}
      </form>
      {message && <p role="status" className="mt-6">{message}</p>}
      {reports.length>0 && <section className="mt-8 space-y-3" aria-label="Published reports">
        <h2 className="font-serif text-2xl">Published Reports</h2>
        {reports.map(r=><div key={r.id} className="bg-white border rounded-xl p-5 flex items-center justify-between gap-4">
          <div><p className="font-semibold">{r.report_name}</p><p className="text-sm text-muted-foreground">Batch: {r.batch_number}</p></div>
          <button className="btn-primary shrink-0" onClick={()=>view(r)}>Open file</button>
        </div>)}
      </section>}
      <p className="text-sm text-muted-foreground mt-8">Some file formats may open in an external viewer or require a compatible application. Published reports are provided for transparency; they are not a substitute for the original laboratory document.</p>
    </div>
  </div>;
}
