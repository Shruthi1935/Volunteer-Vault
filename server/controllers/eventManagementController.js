const eventDetails = require('../data/eventManagement');

exports.getEvents = (req, res) => {
  try {
    const userId = req.user.userId; 
    const userEvents = eventDetails.filter(event => event.eventAdminId === userId);
    res.status(200).json(userEvents);
  } catch {
    res.status(500).json({ Error: "Failed to retrieve events." });
  }
}

// Create a new event
exports.createEventManagement = (req, res) => {
  const { eventAdminId, eventName, location, eventDescription, urgency, date } = req.body;

  const newEvent = {
    event_id: eventDetails.length + 1,
    eventAdminId,
    eventName,
    location,
    eventDescription,
    urgency,
    date,
  };

  eventDetails.push(newEvent);
  res.status(201).json(newEvent);
};

exports.deleteEvent = (req, res) => {
  const eventId = parseInt(req.params.id); // Get the event ID from the request URL
  const userId = req.user.userId; // Get the user's ID from the request
  console.log("Deleting event: ", eventId, " from user: ", userId);
  
  const eventIndex = eventDetails.findIndex(event => event.event_id === eventId && event.eventAdminId === userId);

  if (eventIndex !== -1) {
    // Remove the event from the array
    eventDetails.splice(eventIndex, 1);
    console.log("EventDetails after deletion: ", eventDetails)
    res.status(200).json({ message: "Event deleted successfully." });
  } else {
    res.status(404).json({ Error: "Event not found or unauthorized." });
  }
}


// Get all events
// exports.getEventManagement = (req, res) => {res.status(200).json(eventDetails);};

// // Get an event by ID
// exports.getEventManagementId = (req, res) => {
//   const { id } = req.params;
//   const event = eventDetails.find((e) => e.event_id === parseInt(id));
//   if (!event) return res.status(404).send("Event not found");
//   res.status(200).json(event);
// };

// // Update an event by ID
// exports.updateEventManagementId = (req, res) => {
//   const { id } = req.params;
//   const index = eventDetails.findIndex((e) => e.event_id === parseInt(id));
//   if (index === -1) return res.status(404).send("Event not found");
//   const updatedEvent = { ...eventDetails[index], ...req.body };
//   eventDetails[index] = updatedEvent;
//   res.status(200).json(updatedEvent);
// };

// // Delete an event by ID
// exports.deleteEventManagementId = (req, res) => {
//   const { id } = req.params;
//   const index = eventDetails.findIndex((e) => e.event_id === parseInt(id));
//   if (index === -1) return res.status(404).send("Event not found");
//   const deletedEvent = eventDetails.splice(index, 1);
//   res.status(200).json(deletedEvent);
// };
