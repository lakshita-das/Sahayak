export default function EmergencyContacts() {
  const contacts = [
    ['Campus Security', 'Security Control Room', '+91-99999 00001', '24x7'],
    ['Women Cell', 'Women Safety Support', '+91-99999 00002', '9 AM – 9 PM'],
    ['Ambulance', 'Medical Emergency', '+91-99999 00003', '24x7'],
    ['Fire Safety', 'Fire Station (Campus & City)', '+91-99999 00004', '24x7'],
    ['Hostel Number', 'Hostel Security Desk', '+91-99999 00005', '6 PM – 7 AM'],
    ['Hostel Warden', 'Hostel Warden Contact', '+91-99999 00006', 'On call'],
    ['Local Guardian', 'Personal emergency contact', '+91-99999 00007', 'As per agreement'],
    ['Other Contact', 'Optional trusted number', '+91-99999 00008', 'Custom']
  ];

  return (
    <>
      <div className="content-header">
        <h1>Emergency Contacts</h1>
        <p>Reach out quickly during any safety concern or emergency.</p>
      </div>

      <section className="card">
        <h2>Campus & Local Emergency Numbers</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Contact</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(([name, role, phone, avail], i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{role}</td>
                <td>{phone}</td>
                <td>{avail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}