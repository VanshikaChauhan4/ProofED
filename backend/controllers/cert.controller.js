import Certificate from "../models/Certificate.js"
import { generateHash } from "../services/hash.service.js"
import { addBlock } from "../services/blockchain.service.js"

export const issueCertificate = async (req, res) => {
  try {
    const { student, course } = req.body;

    const hash = generateHash({ student, course })
    const block = addBlock(hash)

    const cert = await Certificate.create({
      student,
      course,
      hash,
      blockHash: block.blockHash
    })

    res.json({
      success: true,
      message: "Certificate issued & stored on blockchain",
      cert
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
