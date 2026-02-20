import React, { useState } from "react";
import { FaEdit, FaTrash, FaBell } from "react-icons/fa";

const primaryColor = "#5d9cc6ff";

const tableHeaderStyle = {
  border: "1px solid #ddd",
  textAlign: "center",
  fontWeight: "bold",
  backgroundColor: primaryColor,
  color: "white",
  padding: "10px",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  textAlign: "center",
  padding: "8px",
};

const buttonStyle = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const Telecast = () => {
  const [poojas, setPoojas] = useState([
    {
      id: 1,
      title: "Ganesh Pooja",
      date: "2025-08-20",
      time: "10:00 AM",
      duration: "60",
      status: "Upcoming",
      notification: "No",
    },
    {
      id: 2,
      title: "Lakshmi Pooja",
      date: "2025-08-18",
      time: "07:30 PM",
      duration: "90",
      status: "Completed",
      notification: "Yes",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editPooja, setEditPooja] = useState(null);

  // 📌 Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPooja = {
      id: editPooja ? editPooja.id : poojas.length + 1,
      title: form.title.value,
      date: form.date.value,
      time: form.time.value,
      duration: form.duration.value,
      status: form.status.value,
      notification: editPooja ? editPooja.notification : "No",
    };

    if (editPooja) {
      setPoojas(poojas.map((p) => (p.id === editPooja.id ? newPooja : p)));
    } else {
      setPoojas([...poojas, newPooja]);
    }

    setShowModal(false);
    setEditPooja(null);
    form.reset();
  };

  // 📌 Delete Pooja
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this pooja?")) {
      setPoojas(poojas.filter((p) => p.id !== id));
    }
  };

  // 📌 Notify
  const handleNotify = (id) => {
    setPoojas(
      poojas.map((p) => (p.id === id ? { ...p, notification: "Yes" } : p))
    );
    alert("🔔 Notification sent!");
  };

  // 📌 Open Edit Modal
  const handleEdit = (pooja) => {
    setEditPooja(pooja);
    setShowModal(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2"></div>

        {/* Main Content */}
        <div
          className="col-lg-10 col-md-12 col-sm-12"
          style={{ padding: "20px" }}
        >
         

          {/* 📌 Pooja List Table */}
          <div style={{ overflowX: "auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "10px",
                marginTop:"110px",
              }}
            >
              <button
                onClick={() => {
                  setEditPooja(null);
                  setShowModal(true);
                }}
                style={{
                  ...buttonStyle,
                  backgroundColor: primaryColor,
                  color: "white",
                }}
              >
                Add Pooja
              </button>
            </div>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "20px",
              }}
            >
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>S.No</th>
                  <th style={tableHeaderStyle}>Title</th>
                  <th style={tableHeaderStyle}>Scheduled Date</th>
                  <th style={tableHeaderStyle}>Time</th>
                  <th style={tableHeaderStyle}>Duration</th>
                  <th style={tableHeaderStyle}>Status</th>
                  <th style={tableHeaderStyle}>Notification</th>
                  <th style={tableHeaderStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {poojas.map((pooja, index) => (
                  <tr key={pooja.id}>
                    <td style={tableCellStyle}>{index + 1}</td>
                    <td style={tableCellStyle}>{pooja.title}</td>
                    <td style={tableCellStyle}>{pooja.date}</td>
                    <td style={tableCellStyle}>{pooja.time}</td>
                    <td style={tableCellStyle}>{pooja.duration} min</td>
                    <td style={tableCellStyle}>{pooja.status}</td>
                    <td style={tableCellStyle}>{pooja.notification}</td>
                    <td style={tableCellStyle}>
                      <button
                        onClick={() => handleEdit(pooja)}
                        style={{
                          ...buttonStyle,
                          backgroundColor: primaryColor,
                          color: "white",
                          marginRight: "5px",
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(pooja.id)}
                        style={{
                          ...buttonStyle,
                          backgroundColor: "red",
                          color: "white",
                          marginRight: "5px",
                        }}
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => handleNotify(pooja.id)}
                        style={{
                          ...buttonStyle,
                          backgroundColor: "orange",
                          color: "white",
                        }}
                      >
                        <FaBell />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 📌 Modal Popup */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "999",
            padding: "10px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "550px",
              boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: primaryColor }}>
              {editPooja ? "Edit Pooja" : "Add New Pooja"}
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={editPooja?.title || ""}
                required
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />
              <textarea
                name="description"
                placeholder="Description"
                defaultValue={editPooja?.description || ""}
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />
              <input
                type="date"
                name="date"
                defaultValue={editPooja?.date || ""}
                required
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />
              <input
                type="time"
                name="time"
                defaultValue={editPooja?.time || ""}
                required
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />
              <input
                type="number"
                name="duration"
                placeholder="Duration (minutes)"
                defaultValue={editPooja?.duration || ""}
                required
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />
              <select
                name="status"
                defaultValue={editPooja?.status || "Upcoming"}
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              >
                <option>Upcoming</option>
                <option>Live</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <div style={{ textAlign: "right", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: "gray",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    ...buttonStyle,
                    backgroundColor: primaryColor,
                    color: "white",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Telecast;
