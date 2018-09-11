
export interface Surah {
    nomor:      string;
    nama:       string;
    asma:       string;
    name:       string;
    start:      string;
    ayat:       string;
    type:       Type;
    urut:       string;
    rukuk:      string;
    arti:       string;
    keterangan: string;
}

export enum Type {
    Madinah = "madinah",
    Mekah = "mekah",
}

export interface Juz {
    number: string;
    start: Start;
    end:   End;
}

export interface Start {
    number: string;
    verse: string;
    name: string;
}

export interface End {
    number: string;
    verse: string;
    name:  string;
}
