-- Run in the existing Supabase project's SQL Editor.
-- Uses the already-created public.quality_reports table and private quality-reports bucket.
-- Admin UUID comes from the previously created Supabase Authentication user.
ALTER TABLE public.quality_reports ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published reports" ON public.quality_reports;
DROP POLICY IF EXISTS "quality_reports_public_select" ON public.quality_reports;
DROP POLICY IF EXISTS "quality_reports_admin_all" ON public.quality_reports;
CREATE POLICY "quality_reports_public_select" ON public.quality_reports FOR SELECT TO anon, authenticated USING (is_published = true OR auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid);
CREATE POLICY "quality_reports_admin_all" ON public.quality_reports FOR ALL TO authenticated USING (auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid) WITH CHECK (auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid);
-- Remove older permissive policies BEFORE using the system. Check for any other policies
-- in the dashboard and remove them if they permit anonymous writes or unpublished reads.
DROP POLICY IF EXISTS "Public read access to quality reports" ON storage.objects;
DROP POLICY IF EXISTS "quality_reports_storage_read" ON storage.objects;
DROP POLICY IF EXISTS "quality_reports_storage_admin_insert" ON storage.objects;
DROP POLICY IF EXISTS "quality_reports_storage_admin_update" ON storage.objects;
DROP POLICY IF EXISTS "quality_reports_storage_admin_delete" ON storage.objects;
-- Public may sign short-lived links ONLY to published reports.
CREATE POLICY "quality_reports_storage_read" ON storage.objects FOR SELECT TO anon, authenticated
USING (bucket_id='quality-reports' AND (
  EXISTS (SELECT 1 FROM public.quality_reports q WHERE q.file_path = name AND q.is_published = true)
  OR auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid
));
CREATE POLICY "quality_reports_storage_admin_insert" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id='quality-reports' AND auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid);
CREATE POLICY "quality_reports_storage_admin_update" ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id='quality-reports' AND auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid)
WITH CHECK (bucket_id='quality-reports' AND auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid);
CREATE POLICY "quality_reports_storage_admin_delete" ON storage.objects FOR DELETE TO authenticated
USING (bucket_id='quality-reports' AND auth.uid() = '511e60d1-1282-483b-b634-e3172f2cef5e'::uuid);
-- IMPORTANT: Review all other existing policies on public.quality_reports and storage.objects.
-- PostgreSQL combines permissive policies with OR; a permissive older policy can bypass these.
