export default function handler(req, res) {
  const tricks = [
    { id: 1, name: "Inside Kick" },
    { id: 2, name: "Outside Kick" },
    { id: 3, name: "Toe Stall" }
  ];

  res.status(200).json(tricks);
}
