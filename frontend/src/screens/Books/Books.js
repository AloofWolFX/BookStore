import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import axios from "axios";

const Books = () => {
  const [notes, setNotes] = useState([]);

  const deleteHander = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        onClick={decoratedOnClick}
        style={{ border: "none", background: "none" }}
      >
        {children}
      </button>
    );
  }

  const fetchNotes = async () => {
    const { data } = await axios.get(`/api/notes`);
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back XXX..">
      <Link className="linktag" to="/books">
        <Button style={{ marginBottom: 10 }}>Create New Note</Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <CustomToggle eventKey="1">{note.title}</CustomToggle>
              </span>
              <div>
                <Button href={`/books/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHander(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h4>
                  <Badge variant="success">Categroy{note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Books;
