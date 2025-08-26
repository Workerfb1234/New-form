export default function Home() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required /><br /><br />
        <input type="email" name="email" placeholder="Your Email" required /><br /><br />
        <textarea name="message" placeholder="Your Message" required></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
