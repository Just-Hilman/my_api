import express from 'express';

import { getLaporan, createLaporan, getLaporanId, deleteLaporan, updateLaporan } from '../controllers/laporan.js';


const router = express.Router();


router.get('/', getLaporan);

router.post('/', createLaporan);

router.get('/:id', getLaporanId);

router.delete('/:id', deleteLaporan);

router.patch('/:id', updateLaporan);

export default router;