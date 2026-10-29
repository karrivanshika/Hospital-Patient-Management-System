const patient = {
  id: 101,
  name: "Vanshika",
  doctor: "Dr. Ravi",
  time: "11:00 AM",
};

export default function App() {
  return (
    <div>
      <h2>Hospital Patient Information</h2>

      <p>ID: {patient.id}</p>
      <p>Name: {patient.name}</p>
      <p>Doctor: {patient.doctor}</p>
      <p>Appointment Time: {patient.time}</p>
    </div>
  );
}