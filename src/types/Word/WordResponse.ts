export interface AnlamlarListe {
    anlam_id: string;
    madde_id: string;
    anlam_sira: string;
    fiil: string;
    tipkes: string;
    anlam: string;
    anlam_html?: string | null;
    gos: string;
    gos_kelime: string;
    gos_kultur: string;
    orneklerListe?: OrneklerListe[];
    ozelliklerListe?: OzelliklerListe[];
  }
  
  export interface OrneklerListe {
    ornek_id: string;
    anlam_id: string;
    ornek_sira: string;
    ornek: string;
    kac: string;
    yazar_id: string;
    yazar_vd?: string;
    yazar?: Yazar[];
  }
  
  export interface Yazar {
    yazar_id: string;
    tam_adi: string;
    kisa_adi: string;
    ekno: string;
  }
  
  export interface OzelliklerListe {
    ozellik_id: string;
    tur: string;
    tam_adi: string;
    kisa_adi: string;
    ekno: string;
  }

  export interface KelimeGrubu {
    [key: string]: string[];
  }

  export interface Atasozu { 
    madde_id: string;
    madde: string;
    on_taki?: string | null
  }
  
  export interface WordResponse {
    madde_id: string;
    kac: string;
    kelime_no: string;
    cesit: string;
    anlam_gor: string;
    taki?: string;
    on_taki?: string | null;
    madde: string;
    madde_html: string;
    cesit_say: string;
    anlam_say: string;
    cogul_mu: string;
    ozel_mi: string;
    egik_mi: string;
    lisan_kodu: string;
    telaffuz: string;
    lisan: string;
    birlesikler: string;
    anlamlarListe: AnlamlarListe[];
    atasozu?: Atasozu[];
  }
  