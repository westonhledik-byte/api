export default function handler(req, res) {
  const tricks = [
    "Inside Kick",
    "Outside Kick",
    "Toe Stall",
    "Clipper",
    "Around the World",
    "Legover",
    "Mirage"
  ];

  // Create a stable daily seed
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  let seed = 0;
  for (let i = 0; i < today.length; i++) {
    seed += today.charCodeAt(i);
  }

  // Simple seeded RNG
  const pick = (offset) => {
    const index = (seed + offset) % tricks.length;
    return tricks[index];
  };

  const combo = [pick(0), pick(1), pick(2)];

  res.status(200).json({
    date: today,
    combo
  });
}
