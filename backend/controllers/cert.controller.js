import Certificate from "../models/certificate.js"
import { generateHash } from "../services/hash.service.js"

export const issueCertificate = async (req, res) => {
  try {
    const { student, course, institute } = req.body

    if (!student || !course || !institute) {
      return res.status(400).json({ message: "Missing fields" })
    }

    const certData = {
      student,
      course,
      institute,
      issuedAt: new Date()
    }

    const hash = generateHash(certData)

    const cert = await Certificate.create({
      ...certData,
      hash
    })

    res.status(201).json({
      success: true,
      certificate: cert
    })
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}
