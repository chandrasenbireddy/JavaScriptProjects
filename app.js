async function getEmployees() {
  try {
    const res = await fetch("https://employees-api-i9ae.onrender.com/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    let longestName = "",
      activeName = "";
    let id = null,
      id2 = null;
    let activity_count = 0;
    for (const emp of data) {
      const fullName = emp.first_name + " " + emp.last_name;

      if (fullName.length > longestName.length) {
        longestName = fullName;
        id = emp.id;
      }
      if (emp.activity_count > activity_count) {
        activeName = fullName;
        id2 = emp.id;
      }
    }

    console.log("Longest name ID:", id);
    console.log("Most active employee:", activeName, "ID:", id2);

    // Update role to "Superstar"
    const response = await fetch(
      `https://employees-api-i9ae.onrender.com/api/v1/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: "Superstar" }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updated = await response.json();
    console.log("Updated employee:", updated);
    if (id2 !== id) {
      const res2 = fetch(
        `https://employees-api-i9ae.onrender.com/api/v1/update/${id2}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: "Most active" }),
        }
      );
      if (!res2.ok) {
        throw new Error(`HTTP Error code: ${res2.status}`);
      }
      const updated2 = await res2.json();
      console.log("Updated employee:", updated2);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

getEmployees();
