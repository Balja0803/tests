export default function Profile(prop) {
  const { setLogout } = prop;
  return (
    <div>
      <div>Profile</div>
      <button onClick={() => setLogout(false)}>Logout</button>
    </div>
  );
}
