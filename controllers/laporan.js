import { v4 as uuidv4 } from 'uuid';

let laporan = []

export const getLaporan = (req, res) => {
    res.send(laporan);
}

export const createLaporan =  (req, res) => {
    const kasus = req.body;
    
    laporan.push({ ...kasus, id: uuidv4() });

    res.send(`User with the name ${kasus.nama} added to the database`);
}

export const getLaporanId = (req, res) => {
    const { id } = req.params;

    const foundLaporan = laporan.find((kasus) => kasus.id === id);


    res.send(foundLaporan);
}

export const deleteLaporan = (req, res) => {
    const { id } = req.params;
    
    laporan = laporan.filter((kasus) => kasus.id !== id);

    res.send(`User with the id ${id} is deleted from the database.`);
}

export const updateLaporan = (req, res) => {
    const { id } = req.params;
    const { nama, keluhan, age } = req.body;

    const kasus = laporan.find((kasus) => kasus.id === id);

    if (nama) {
        kasus.nama = nama;
    }

    if (keluhan) {
        kasus.keluhan = keluhan;
    }

    if (age) {
        kasus.age = age;
    }

    res.send(`User with the id ${id} has been updated`);
}