export interface Karistirma {
    id: string;
    yanlis: string;
    dogru: string;
}

export interface Atasoz {
    madde: string;
    anlam: string;
}

export interface Syyd {
    id: string;
    yanliskelime: string;
    dogrukelime: string;
}
export interface Kelime {
    madde: string;
    anlam: string;
}

export interface ContentResponse {
    karistirma: Karistirma[];
    atasoz: Atasoz[];
    syyd: Syyd[];
    kelime: Kelime[];
}
