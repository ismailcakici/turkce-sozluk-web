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

export interface Yabanci {
    karsid: string;
    kkelime: string;
    kkoken: string;
    kkarsilik: string;
    anlam: string;
}

export interface Kelime {
    madde: string;
    anlam: string;
}

export interface ContentResponse {
    sayac: Array<{ deger: string }>;
    karistirma: Karistirma[];
    atasoz: Atasoz[];
    syyd: Syyd[];
    kural: Array<{ adi: string; url: string }>;
    yabanci: Yabanci;
    kelime: Kelime[];
}
