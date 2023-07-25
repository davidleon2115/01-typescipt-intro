interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

type Details = {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 0,
    songDuration: 0,
    song: "",
    details: {
        author: "",
        year: 0
    }
}




export {};