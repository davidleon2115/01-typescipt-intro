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
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {} = audioPlayer;




export {};