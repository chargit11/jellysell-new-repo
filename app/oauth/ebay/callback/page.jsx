export default function EbayCallback() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui',
      backgroundColor: '#f9fafb'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
        Connecting to eBay...
      </h1>
      <p style={{ color: '#6b7280' }}>
        Please wait while we complete the authorization.
      </p>
    </div>
  );
}
