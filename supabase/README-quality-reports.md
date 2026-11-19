# BioPeriposa Quality Reports deployment
1. Existing Supabase project: keep the `quality-reports` bucket PRIVATE. Keep MIME restriction OFF to accept lab files of different formats.
2. In Supabase SQL Editor, inspect existing RLS policies, then run `quality_reports_security.sql`. Remove any additional permissive policies on `public.quality_reports` or `storage.objects` that bypass these restrictions.
3. Vercel frontend project environment variables (Production and Preview): `VITE_SUPABASE_URL` (Supabase Project URL) and `VITE_SUPABASE_ANON_KEY` (publishable/anon key). Never use service_role/secret key in a VITE_ variable.
4. Merge PR after review, redeploy, test `/quality-admin` with the previously created Supabase Auth user. Upload a sample file and publish it.
5. Verify `/quality` on a private/incognito browser with matching product and batch. Check that unpublished reports are not visible, unauthenticated upload/delete fail, and non-admin authenticated users cannot upload.
6. Verify Vercel rewrite fallback for direct `/quality` visits and refresh. Only print QR codes after testing the exact production URL.
7. Files may be of any type but browsers cannot preview every type; a file may require download/opening in another app. Preventing saving of viewed documents is not technically guaranteed.
8. Retention for 24 months requires operational policy/backups and monitoring; this code does not automatically enforce a retention period.
