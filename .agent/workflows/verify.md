# Workflow: Verify & Lint BankSoal FK

Procedure for verifying code syntax and data validity in BankSoal FK.

## Execution

1. **Run Standalone Data Integrity Validator**:
   ```bash
   node .agent/scripts/validate_data.js
   ```

2. **Verify JavaScript Syntax of `app/app.js` & `app/sw.js`**:
   ```bash
   node -e "new Function(require('fs').readFileSync('app/app.js','utf8')); console.log('app.js syntax OK')"
   node -e "new Function(require('fs').readFileSync('app/sw.js','utf8')); console.log('sw.js syntax OK')"
   ```

3. **Check Git Status**:
   ```bash
   git status
   ```

4. **Verify Offline PWA Cache Version**:
   - Ensure `CACHE_NAME` in `app/sw.js` matches asset revision.
