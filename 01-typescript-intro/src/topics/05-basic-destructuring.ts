// Desestructuracion de Objetos -----------------------------------------------------

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details,
}
interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "EsoTilin.mp3",
    details: {
        author: "Tilin",
        year: 2021
    }
}

// Sin desestructuracion
console.log('Song: ', audioPlayer.song);
console.log('Author: ', audioPlayer.details.author);

// Desestructuracion de un parametro
const {song} = audioPlayer;  // se extrae un parametro del objeto y la variable se llama como el parfametro
const {song:anotherSong} = audioPlayer;  // se extrae con nombre de variable personalizado
console.log('Song: ', song);
console.log('Song: ', anotherSong);

// Desestructuracion de varios parametros
const {songDuration:duration, audioVolume:volume} = audioPlayer;
console.log('Duration: ', duration, ' Volume: ', volume);

// Desestructuracion de 2 interfaces por variables separadas
const {details} = audioPlayer;
const{author} = details;
console.log("Author: ",author);

// Desestructuracion de 2 interfaces en una variable (es mas complicado leer)
const{
    song:moreSong,
    songDuration:durationSong,
    details:{author:authorSong}
}= audioPlayer;
console.log("Song: ", moreSong, " Song Duration: ", durationSong, "Details Author: ", authorSong);


// Desestructuracion de Arreglos ------------------------------------------------

// Sin desestructuracion
const memes: string[] = ['Tilin', 'El Pepe', 'Ete Sech'];
console.warn('tercero: ', memes[2] || 'No hay personaje');

const tilin = memes[0];
console.warn('Tilin? ', tilin);

// Con desestructuracion
const [p1, p2, etesech]: string[] = memes;
console.warn('Personaje 3: ', etesech);

// Con desestructuracion y asignaciones por defecto
const [m1, m2, sech, potaxio = 'Not found']: string[] = memes;
console.log('Potaxio? ', potaxio);

export{};