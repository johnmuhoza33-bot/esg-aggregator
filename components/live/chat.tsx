"use client"

import { useState } from "react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you with ESGIntel. How can I assist you today?",
      sender: "support",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setInputMessage("")

      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please call (309) 236-9995 or email john.esganalytics@gmail.com",
          sender: "support",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, supportResponse])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "24px",
            zIndex: 99999,
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            border: "1px solid #e5e7eb",
            width: "320px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(to right, #2563eb, #10b981)",
              color: "white",
              padding: "16px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ fontWeight: "600", margin: "0", fontSize: "16px" }}>ESGIntel Support</h3>
              <p style={{ fontSize: "14px", opacity: "0.9", margin: "0" }}>We're here to help!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                color: "white",
                background: "none",
                border: "none",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "240px",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    backgroundColor: message.sender === "user" ? "#2563eb" : "#f3f4f6",
                    color: message.sender === "user" ? "white" : "#374151",
                  }}
                >
                  <p style={{ margin: "0" }}>{message.text}</p>
                  <p
                    style={{
                      fontSize: "12px",
                      margin: "4px 0 0 0",
                      color: message.sender === "user" ? "#bfdbfe" : "#6b7280",
                    }}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: "16px", borderTop: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button - Completely inline styled for maximum visibility */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 99999,
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "linear-gradient(to right, #2563eb, #10b981)",
            color: "white",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "none",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"
            e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)"
          }}
        >
          {isOpen ? "×" : "CHAT"}
        </button>
      </div>
    </>
  )
}

                  