export default function handler(req, res) {
  const tricks = [
    { id: 1, name: "Inside Kick" },
    { id: 2, name: "Outside Kick" },
    { id: 3, name: "Toe Stall" },
    { id: 4, name: "Clipper" }
  ];

  const trick = tricks[Math.floor(Math.random() * tricks.length)];

  res.status(200).json(trick);
}
