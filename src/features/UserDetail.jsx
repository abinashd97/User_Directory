function UserDetail({ user }) {
  if (!user) return null;
  
  return (
    <div className="user-detail-modal">
      <div className="user-avatar">
        <div className="avatar-placeholder large">
          {user.name?.charAt(0) || 'U'}
        </div>
      </div>
      <h2>{user.name}</h2>
      <p>📧 {user.email}</p>
      <p>👤 Username: @{user.username}</p>
      <p>🆔 User ID: {user.id}</p>
      <p>📱 Phone: {user.phone}</p>
      <p>🌐 Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      
      {user.address && (
        <div className="address-section">
          <h3>📍 Address</h3>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>
      )}
      
      {user.company && (
        <div className="company-section">
          <h3>🏢 Company</h3>
          <p><strong>{user.company.name}</strong></p>
          <p>{user.company.catchPhrase}</p>
          <p>Business: {user.company.bs}</p>
        </div>
      )}
      
      <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          This is a demo user from the JSONPlaceholder API. In a real application, you would see more detailed information here.
        </p>
      </div>
    </div>
  );
}

export default UserDetail;
