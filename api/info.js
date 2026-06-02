export default function handler(req, res) {
  res.status(200).json({
    project: "Hacky Sack API",
    status: "running",
    version: 1
  });
}
