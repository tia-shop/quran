export interface Surahs {
    chapters: Surah[];
}

export interface Surah {
    id:               number;
    chapter_number:   number;
    bismillah_pre:    boolean;
    revelation_order: number;
    revelation_place: RevelationPlace;
    name_complex:     string;
    name_arabic:      string;
    name_simple:      string;
    verses_count:     number;
    pages:            number[];
    translated_name:  TranslatedName;
    chapter: Surah
}

export enum RevelationPlace {
    Madinah = "madinah",
    Makkah = "makkah",
}

export interface TranslatedName {
    language_name: LanguageName;
    name:          string;
}

export enum LanguageName {
    English = "english",
}
