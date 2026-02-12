// Kamus Transliterasi (Inggris ke Fonetik Indonesia)
const transliterationDict = {
    // Common words
    "hello": "hel-o",
    "bye": "bai",
    "yes": "yes",
    "no": "no",
    "thank": "tengk",
    "thanks": "tengks",
    "please": "plis",
    "sorry": "sor-i",
    "excuse": "ek-skius",
    "good": "gud",
    "bad": "bad",
    "morning": "mor-ning",
    "night": "nait",
    "day": "dei",
    "water": "wa-ter",
    "book": "buk",
    "pen": "pen",
    "paper": "pei-per",
    "table": "tei-bel",
    "chair": "cher",
    "door": "dor",
    "window": "win-do",
    "house": "haus",
    "school": "skul",
    "office": "of-is",
    "hospital": "hos-pi-tal",
    
    // Basic verbs
    "go": "go",
    "come": "kam",
    "see": "si",
    "hear": "hir",
    "eat": "it",
    "drink": "drink",
    "sleep": "slip",
    "wake": "weik",
    "run": "ran",
    "walk": "wok",
    "sit": "sit",
    "stand": "stand",
    "write": "rait",
    "read": "red",
    "speak": "spik",
    "listen": "lis-en",
    "understand": "an-der-stand",
    "love": "lav",
    "like": "laik",
    "want": "wont",
    "need": "nid",
    "help": "help",
    "work": "werk",
    "play": "plei",
    "learn": "lern",
    "teach": "tich",
    "know": "no",
    "think": "think",
    "feel": "fil",
    "remember": "ri-mem-ber",
    "forget": "for-get",
    "give": "giv",
    "take": "teik",
    "make": "meik",
    "do": "du",
    "try": "trai",
    "ask": "ask",
    "answer": "an-ser",
    "tell": "tel",
    "call": "kol",
    "find": "faind",
    "lose": "luz",
    "begin": "bi-gin",
    "end": "end",
    "stop": "stop",
    "start": "start",
    "open": "o-pen",
    "close": "klous",
    "buy": "bai",
    "sell": "sel",
    "pay": "pei",
    "show": "sho",
    "watch": "woch",
    "follow": "fol-o",
    "lead": "lid",
    "pass": "pas",
    "fail": "feil",
    "succeed": "sak-sid",
    "happen": "hap-en",
    "seem": "sim",
    "become": "bi-kam",
    "stay": "stei",
    "leave": "liv",
    "arrive": "a-raiv",
    "die": "dai",
    "live": "liv",
    
    // Common adjectives
    "big": "big",
    "small": "smol",
    "fast": "fast",
    "slow": "slo",
    "hot": "hot",
    "cold": "kold",
    "warm": "worm",
    "cool": "kul",
    "high": "hai",
    "low": "lo",
    "long": "long",
    "short": "short",
    "happy": "hap-i",
    "sad": "sad",
    "angry": "ang-gri",
    "tired": "tair-d",
    "hungry": "hang-gri",
    "thirsty": "ther-sti",
    "sick": "sik",
    "healthy": "hel-thi",
    "strong": "strong",
    "weak": "wik",
    "beautiful": "byu-ti-ful",
    "ugly": "ag-li",
    "clean": "klin",
    "dirty": "der-ti",
    "dark": "dark",
    "light": "lait",
    "soft": "soft",
    "hard": "hard",
    "easy": "i-zi",
    "difficult": "dif-i-kal-t",
    "possible": "pos-i-bel",
    "impossible": "im-pos-i-bel",
    "dangerous": "dein-jer-as",
    "safe": "seif",
    "expensive": "ek-spen-siv",
    "cheap": "chip",
    "rich": "rich",
    "poor": "pur",
    "young": "yang",
    "old": "old",
    "new": "nu",
    "fresh": "fresh",
    "dry": "dai",
    "wet": "wet",
    "sweet": "swit",
    "bitter": "bit-er",
    "sour": "sour",
    "salty": "sol-ti",
    "sharp": "sharp",
    "dull": "dal",
    "thick": "thik",
    "thin": "thin",
    "quiet": "kwai-et",
    "loud": "lawd",
    "careful": "ker-ful",
    "careless": "ker-les",
    "lucky": "la-ki",
    "unlucky": "an-la-ki",
    
    // Common nouns
    "family": "fam-i-li",
    "father": "fa-ther",
    "mother": "mah-ther",
    "brother": "brah-ther",
    "sister": "sis-ter",
    "friend": "frend",
    "teacher": "ti-cher",
    "student": "stu-dent",
    "doctor": "dok-ter",
    "nurse": "ners",
    "person": "per-sen",
    "man": "man",
    "woman": "wu-man",
    "child": "chail-d",
    "animal": "an-i-mal",
    "dog": "dog",
    "cat": "kat",
    "bird": "berd",
    "fish": "fish",
    "flower": "flau-er",
    "tree": "tri",
    "food": "fud",
    "bread": "bred",
    "meat": "mit",
    "fruit": "fru-it",
    "vegetable": "vej-ta-bel",
    "milk": "milk",
    "ice": "ais",
    "cream": "krim",
    "coffee": "ko-fi",
    "tea": "ti",
    "juice": "jus",
    "money": "ma-ni",
    "time": "taim",
    "hour": "au-er",
    "minute": "mi-nit",
    "second": "sek-end",
    "day": "dei",
    "week": "wik",
    "month": "manth",
    "year": "yir",
    "weather": "weth-er",
    "rain": "rein",
    "snow": "sno",
    "sun": "san",
    "moon": "mun",
    "star": "star",
    "color": "kal-er",
    "red": "red",
    "blue": "blu",
    "green": "grin",
    "yellow": "yel-o",
    "white": "hwait",
    "black": "blak",
    "orange": "or-inj",
    "purple": "pur-pel",
    "pink": "pingk",
    "number": "nam-ber",
    "letter": "let-er",
    "word": "werd",
    "sentence": "sen-tens",
    "apple": "ap-el",
    "orange": "or-inj",
    "banana": "ba-na-na",
    "school": "skul",
    "university": "yu-ni-ver-si-ti",
    "library": "lai-brer-i",
    "computer": "kam-pyu-ter",
    "phone": "fon",
    "internet": "in-ter-net",
    "car": "kar",
    "bicycle": "bai-si-kel",
    "train": "trein",
    "airplane": "er-plein",
    "movie": "mu-vi",
    "music": "myu-zik",
    "dance": "dans",
    "sport": "sport",
    "game": "geim",
    "piano": "pi-a-no",
    "guitar": "gi-tar",
    "church": "church",
    "temple": "tem-pel",
    "mosque": "mosk",
    "hospital": "hos-pi-tal",
    "restaurant": "res-to-ran",
    "supermarket": "su-per-mar-ket",
    "clothing": "klu-thing",
    "shoes": "shuz",
    "hat": "hat",
    "glasses": "glas-ez",
    "watch": "woch",
    "camera": "kam-ra",
    "furniture": "fer-ni-cher",
    "kitchen": "ki-chen",
    "bedroom": "bed-rum",
    "bathroom": "bath-rum",
    "mountain": "maun-tin",
    "river": "ri-ver",
    "ocean": "o-shan",
    "beach": "bich",
    "forest": "for-ist",
    "flower": "flau-er",
    "grass": "gras",
    "grass": "gras",
    "science": "sai-ens",
    "history": "his-to-ri",
    "english": "ing-glish",
    "math": "math",
    "physics": "fiz-iks",
    "chess": "ches",
    "company": "kam-pa-ni",
    "government": "gav-ern-ment",
    "country": "kan-tri",
    "president": "prez-i-dent",
    "king": "king",
    "queen": "kwin",
    "light": "lait",
    "soft": "soft",
    "hard": "hard",
    "easy": "i-zi",
    "difficult": "dif-fi-kalt",
    "possible": "pos-i-bel",
    "impossible": "im-pos-i-bel",
    "dangerous": "dein-jer-as",
    "safe": "seif",
    "expensive": "eks-pen-siv",
    "cheap": "chip",
    "rich": "rich",
    "poor": "pur",
    "young": "yang",
    "old": "ould",
    "new": "niu",
    "fresh": "fresh",
    "dry": "drai",
    "wet": "wet",
    "sweet": "swit",
    "bitter": "bit-ter",
    "sour": "sow-er",
    "salty": "sol-ti",
    "sharp": "sharp",
    "dull": "dal",
    "thick": "thik",
    "thin": "thin",
    "quiet": "kwai-et",
    "loud": "lawd",
    "careful": "ker-ful",
    "careless": "ker-les",
    "lucky": "la-ki",
    "unlucky": "an-la-ki",
    
    // Common nouns
    "house": "haus",
    "room": "rum",
    "bathroom": "bath-rum",
    "kitchen": "ki-chen",
    "bedroom": "bed-rum",
    "living": "li-ving",
    "school": "skul",
    "office": "o-fis",
    "hospital": "hos-pi-tal",
    "restaurant": "res-to-ran",
    "store": "stor",
    "market": "mar-ket",
    "library": "lai-brer-i",
    "park": "park",
    "street": "strit",
    "city": "si-ti",
    "country": "kan-tri",
    "world": "werld",
    "person": "per-son",
    "man": "man",
    "woman": "wu-man",
    "boy": "boi",
    "girl": "gerl",
    "child": "chail-d",
    "family": "fam-li",
    "father": "fa-ther",
    "mother": "mah-ther",
    "brother": "brah-ther",
    "sister": "sis-ter",
    "son": "san",
    "daughter": "do-ter",
    "friend": "frend",
    "teacher": "ti-cher",
    "student": "stu-dent",
    "doctor": "dok-tor",
    "nurse": "nurs",
    "chef": "chef",
    "artist": "ar-tist",
    "musician": "miu-zish-an",
    "animal": "an-i-mal",
    "dog": "dog",
    "cat": "kat",
    "bird": "berd",
    "fish": "fish",
    "flower": "flau-er",
    "tree": "tri",
    "grass": "gras",
    "money": "ma-ni",
    "food": "fud",
    "bread": "bred",
    "meat": "mit",
    "fruit": "fru-it",
    "vegetable": "vej-ta-bel",
    "milk": "milk",
    "ice": "ais",
    "cream": "krim",
    "coffee": "ko-fi",
    "tea": "ti",
    "juice": "jus",
    "time": "taim",
    "hour": "au-er",
    "minute": "mi-nit",
    "second": "se-kond",
    "week": "wik",
    "month": "manth",
    "year": "yir",
    "weather": "we-ther",
    "rain": "rein",
    "snow": "snou",
    "sun": "san",
    "moon": "mun",
    "star": "star",
    "cloud": "klaud",
    "wind": "wind",
    "street": "strit",
    "road": "rod",
    "bridge": "brij",
    "mountain": "maun-tin",
    "river": "ri-ver",
    "ocean": "o-shan",
    "beach": "bich",
    "color": "ka-lor",
    "red": "red",
    "blue": "blu",
    "green": "grin",
    "yellow": "yel-o",
    "white": "hwait",
    "black": "blak",
    "orange": "o-rinj",
    "purple": "per-pel",
    "pink": "pingk",
    "grey": "grei",
    "number": "nam-ber",
    "letter": "let-er",
    "word": "werd",
    "sentence": "sen-tens",
    "question": "kwes-chun",
    "answer": "an-ser",
    "story": "sto-ri",
    "music": "miu-zik",
    "song": "song",
    "dance": "dans",
    "game": "geim",
    "sport": "sport",
    "movie": "mu-vi",
    "television": "tel-e-vizh-un",
    "radio": "rei-di-o",
    "phone": "foun",
    "computer": "kam-piu-ter",
    "keyboard": "ki-bord",
    "mouse": "maus",
    "screen": "skrin",
    "car": "kar",
    "bus": "bas",
    "train": "trein",
    "airplane": "er-plein",
    "bicycle": "bai-si-kel",
    "shoe": "shu",
    "hat": "hat",
    "shirt": "shert",
    "pants": "pants",
    "dress": "dres",
    "coat": "kout",
    "sock": "sok",
    "shoe": "shu",
    "watch": "woch",
    "ring": "ring",
    "necklace": "nek-les",
    "bracelet": "breis-let",
    "glasses": "glas-ez",
    "camera": "kam-ra",
    "bag": "bag",
    "suitcase": "sut-keis",
    "bottle": "bot-el",
    "glass": "glas",
    "cup": "kap",
    "plate": "pleit",
    "spoon": "spun",
    "fork": "fork",
    "knife": "naif",
    "lamp": "lamp",
    "light": "lait",
    "picture": "pik-cher",
    "poster": "pos-ter",
    "wall": "wol",
    "floor": "flor",
    "ceiling": "si-ling",
    "roof": "ruf",
    "bed": "bed",
    "pillow": "pil-o",
    "blanket": "blang-kit",
    "carpet": "kar-pit",
    "sofa": "so-fa",
    "mirror": "mir-or",
    "bathroom": "bath-rum",
    "toilet": "toi-let",
    "shower": "shou-er",
    "stove": "stouv",
    "refrigerator": "ri-frij-a-rei-tor",
    "cup": "kap",
    "bottle": "bot-el",
    "garden": "gar-den",
    "yard": "yard",
    "fence": "fens",
    "gate": "geit"
};

function transliterateWord() {
    let englishWord = document.getElementById("englishWord").value.toLowerCase().trim();
    let resultDiv = document.getElementById("transliteResult");
    
    if (englishWord === "") {
        resultDiv.innerText = "";
        return;
    }
    
    // Cek apakah kata ada di kamus
    if (transliterationDict[englishWord]) {
        resultDiv.innerText = transliterationDict[englishWord];
    } else {
        // Transliterasi fonetik lanjutan untuk kata apapun
        let result = advancedTransliterate(englishWord);
        resultDiv.innerText = result;
    }
}

function advancedTransliterate(word) {
    // Hapus spasi dan karakter ekstra
    word = word.replace(/\s+/g, '').replace(/[^a-z]/g, '');
    
    if (word.length === 0) return "";
    
    let result = "";
    let i = 0;
    
    while (i < word.length) {
        let char = word[i];
        let nextChar = word[i + 1] || '';
        let nextNextChar = word[i + 2] || '';
        
        // Handle digraf dan trigraf umum terlebih dahulu
        if (char + nextChar === 'ch') {
            result += 'ch';
            i += 2;
        } else if (char + nextChar === 'sh') {
            result += 'sh';
            i += 2;
        } else if (char + nextChar === 'th') {
            result += 'th';
            i += 2;
        } else if (char + nextChar === 'ph') {
            result += 'f';
            i += 2;
        } else if (char + nextChar === 'ck') {
            result += 'k';
            i += 2;
        } else if (char + nextChar === 'tch') {
            result += 'tch';
            i += 3;
        } else if (char + nextChar === 'ng') {
            result += 'ng';
            i += 2;
        } else if (char + nextChar === 'ght') {
            result += 't';
            i += 3;
        } else if (char + nextChar === 'qu') {
            result += 'kw';
            i += 2;
        } else if (char + nextChar === 'x') {
            result += 'ks';
            i += 1;
        } else if (char === 'j') {
            result += 'j';
            i += 1;
        } else if (char === 'c') {
            // c diikuti e, i, y = suara lembut
            if (nextChar === 'e' || nextChar === 'i' || nextChar === 'y') {
                result += 's';
            } else {
                result += 'k';
            }
            i += 1;
        } else if (char === 'g') {
            // g diikuti e, i, y = suara lembut (j)
            if (nextChar === 'e' || nextChar === 'i' || nextChar === 'y') {
                result += 'j';
            } else {
                result += 'g';
            }
            i += 1;
        } else if (char === 's') {
            // s di antara vokal bisa seperti z
            if (i > 0 && i < word.length - 1) {
                let prevIsVowel = 'aeiou'.includes(word[i - 1]);
                let nextIsVowel = 'aeiou'.includes(nextChar);
                if (prevIsVowel && nextIsVowel) {
                    result += 'z';
                } else {
                    result += 's';
                }
            } else {
                result += 's';
            }
            i += 1;
        } else if (char === 'k' && nextChar === 'n') {
            result += 'n';
            i += 2;
        } else if (char === 'w' && nextChar === 'r') {
            result += 'r';
            i += 2;
        } else if (char === 'w' && 'aeiou'.includes(nextChar)) {
            result += 'w';
            i += 1;
        } else if (char === 'w' && !'aeiou'.includes(nextChar) && i === word.length - 1) {
            result += '';
            i += 1;
        } else if (char === 'y') {
            if (i === 0 || !'aeiou'.includes(word[i - 1])) {
                result += 'y';
            } else {
                result += 'i';
            }
            i += 1;
        } else if (char === 'h') {
            // Silent h in some cases
            if (i === 0 && word[1] !== 'h') {
                result += 'h';
            } else if (i > 0 && word[i - 1] !== 'c' && word[i - 1] !== 's' && word[i - 1] !== 't') {
                result += 'h';
            }
            i += 1;
        } else if (char === 'e' && i === word.length - 1) {
            // Silent e at the end
            i += 1;
        } else if (char === 'b' && nextChar === 'b') {
            result += 'b';
            i += 2;
        } else if (char === 'd' && nextChar === 'd') {
            result += 'd';
            i += 2;
        } else if (char === 'f' && nextChar === 'f') {
            result += 'f';
            i += 2;
        } else if (char === 'l' && nextChar === 'l') {
            result += 'l';
            i += 2;
        } else if (char === 'm' && nextChar === 'm') {
            result += 'm';
            i += 2;
        } else if (char === 'n' && nextChar === 'n') {
            result += 'n';
            i += 2;
        } else if (char === 'p' && nextChar === 'p') {
            result += 'p';
            i += 2;
        } else if (char === 'r' && nextChar === 'r') {
            result += 'r';
            i += 2;
        } else if (char === 's' && nextChar === 's') {
            result += 's';
            i += 2;
        } else if (char === 't' && nextChar === 't') {
            result += 't';
            i += 2;
        } else if (char === 'z' && nextChar === 'z') {
            result += 'z';
            i += 2;
        } else if (char === 'a' && nextChar === 'i') {
            result += 'ai';
            i += 2;
        } else if (char === 'e' && nextChar === 'a') {
            result += 'i';
            i += 2;
        } else if (char === 'o' && nextChar === 'u') {
            result += 'au';
            i += 2;
        } else if (char === 'o' && nextChar === 'o') {
            result += 'u';
            i += 2;
        } else if (char === 'e' && nextChar === 'a') {
            result += 'i';
            i += 2;
        } else if (char === 'i' && nextChar === 'e') {
            result += 'i';
            i += 2;
        } else if (char === 'o' && nextChar === 'i') {
            result += 'oi';
            i += 2;
        } else if (char === 'o' && nextChar === 'i') {
            result += 'oi';
            i += 2;
        } else if (char === 'e' && nextChar === 'i') {
            result += 'ei';
            i += 2;
        } else if (char === 'u' && nextChar === 'e') {
            result += 'ue';
            i += 2;
        } else {
            // Pemetaan karakter default
            const defaultPhonetics = {
                'a': 'a', 'b': 'b', 'd': 'd', 'e': 'e', 'f': 'f',
                'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l',
                'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'r': 'r',
                's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'ks',
                'y': 'y', 'z': 'z'
            };
            result += defaultPhonetics[char] || char;
            i += 1;
        }
    }
    
    // Tambahkan pemisah suku kata dengan tanda hubung berdasarkan pola
    result = addSyllableBreaks(result);
    
    return result;
}

function addSyllableBreaks(word) {
    // Pemisahan suku kata sederhana berdasarkan pola vokal
    if (word.length <= 3) return word;
    
    let result = "";
    let vowels = 'aiou';
    
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let nextChar = word[i + 1] || '';
        let nextNextChar = word[i + 2] || '';
        
        result += char;
        
        // Tambahkan tanda hubung setelah vokal jika diikuti consonant clusters
        if (vowels.includes(char) && 
            !vowels.includes(nextChar) && nextChar !== '' &&
            !vowels.includes(nextNextChar) && nextNextChar !== '' &&
            !(char === '-')) {
            result += '-';
        }
    }
    
    // Keadaan luar biasa: Jangan ada tanda hubung di akhir
    if (result.endsWith('-')) {
        result = result.slice(0, -1);
    }
    
    // Gabungkan tanda hubung berlipat ganda
    result = result.replace(/-+/g, '-');
    
    return result;
}

// Kamus Terbalik untuk Indonesia ke Inggris
const reverseTransliterationDict = {
    // Common words
    "halo": "hello",
    "helo": "hello",
    "selamat": "greetings",
    "selamatpagi": "good morning",
    "selamatmalam": "good evening",
    "terimakasih": "thank you",
    "terima-kasih": "thank you",
    "tolong": "please",
    "silakan": "please",
    "maaf": "sorry",
    "permisi": "excuse me",
    "baik": "good",
    "bagus": "good",
    "jelek": "bad",
    "pagi": "morning",
    "sore": "afternoon",
    "malam": "night",
    "hari": "day",
    "air": "water",
    "buku": "book",
    "pena": "pen",
    "pensil": "pencil",
    "kertas": "paper",
    "meja": "table",
    "kursi": "chair",
    "pintu": "door",
    "jendela": "window",
    
    // Basic verbs
    "pergi": "go",
    "datang": "come",
    "lihat": "see",
    "dengar": "hear",
    "makan": "eat",
    "minum": "drink",
    "tidur": "sleep",
    "bangun": "wake up",
    "lari": "run",
    "jalan": "walk",
    "duduk": "sit",
    "berdiri": "stand",
    "tulis": "write",
    "baca": "read",
    "bicara": "speak",
    "berbicara": "speak",
    "dengarkan": "listen",
    "mengerti": "understand",
    "sayang": "love",
    "suka": "like",
    "ingin": "want",
    "butuh": "need",
    "membantu": "help",
    "bekerja": "work",
    "bermain": "play",
    "belajar": "learn",
    "mengajar": "teach",
    "tahu": "know",
    "berpikir": "think",
    "merasa": "feel",
    "mengingat": "remember",
    "lupa": "forget",
    "memberi": "give",
    "mengambil": "take",
    "membuat": "make",
    "lakukan": "do",
    "coba": "try",
    "tanya": "ask",
    "jawab": "answer",
    "katakan": "tell",
    "panggil": "call",
    "temukan": "find",
    "kehilangan": "lose",
    "mulai": "start",
    "selesai": "finish",
    "berhenti": "stop",
    "buka": "open",
    "tutup": "close",
    "beli": "buy",
    "jual": "sell",
    "bayar": "pay",
    "tunjukkan": "show",
    "tonton": "watch",
    "ikuti": "follow",
    "pimpin": "lead",
    "lewati": "pass",
    "gagal": "fail",
    "berhasil": "succeed",
    "terjadi": "happen",
    "tampak": "seem",
    "menjadi": "become",
    "tinggal": "stay",
    "hidup": "live",
    "mati": "die",
    "tiba": "arrive",
    
    // Common adjectives
    "besar": "big",
    "kecil": "small",
    "cepat": "fast",
    "lambat": "slow",
    "panas": "hot",
    "dingin": "cold",
    "hangat": "warm",
    "sejuk": "cool",
    "tinggi": "high",
    "rendah": "low",
    "panjang": "long",
    "pendek": "short",
    "senang": "happy",
    "gembira": "happy",
    "sedih": "sad",
    "marah": "angry",
    "lelah": "tired",
    "lapar": "hungry",
    "haus": "thirsty",
    "sakit": "sick",
    "sehat": "healthy",
    "kuat": "strong",
    "lemah": "weak",
    "indah": "beautiful",
    "cantik": "beautiful",
    "jelek": "ugly",
    "bersih": "clean",
    "kotor": "dirty",
    "gelap": "dark",
    "terang": "light",
    "lembut": "soft",
    "keras": "hard",
    "mudah": "easy",
    "sulit": "difficult",
    "mungkin": "possible",
    "mustahil": "impossible",
    "berbahaya": "dangerous",
    "aman": "safe",
    "mahal": "expensive",
    "murah": "cheap",
    "kaya": "rich",
    "miskin": "poor",
    "muda": "young",
    "tua": "old",
    "baru": "new",
    "segar": "fresh",
    "kering": "dry",
    "basah": "wet",
    "manis": "sweet",
    "pahit": "bitter",
    "asam": "sour",
    "asin": "salty",
    "tajam": "sharp",
    "tumpul": "dull",
    "tebal": "thick",
    "tipis": "thin",
    "sunyi": "quiet",
    "bising": "loud",
    "hatihati": "careful",
    "ceroboh": "careless",
    "beruntung": "lucky",
    "sial": "unlucky",
    
    // Common nouns
    "rumah": "house",
    "kamar": "room",
    "kamarmandi": "bathroom",
    "dapur": "kitchen",
    "kamar-tidur": "bedroom",
    "ruangan": "room",
    "sekolah": "school",
    "kantor": "office",
    "rumahsakit": "hospital",
    "restoran": "restaurant",
    "toko": "store",
    "pasar": "market",
    "perpustakaan": "library",
    "taman": "park",
    "jalanan": "street",
    "kota": "city",
    "negara": "country",
    "dunia": "world",
    "orang": "person",
    "pria": "man",
    "wanita": "woman",
    "anak": "child",
    "keluarga": "family",
    "ayah": "father",
    "ibu": "mother",
    "kakak": "older sibling",
    "adik": "younger sibling",
    "anak-laki": "son",
    "anak-perempuan": "daughter",
    "teman": "friend",
    "guru": "teacher",
    "murid": "student",
    "dokter": "doctor",
    "perawat": "nurse",
    "koki": "chef",
    "seniman": "artist",
    "musisi": "musician",
    "hewan": "animal",
    "anjing": "dog",
    "kucing": "cat",
    "burung": "bird",
    "ikan": "fish",
    "bunga": "flower",
    "pohon": "tree",
    "rumput": "grass",
    "uang": "money",
    "makanan": "food",
    "roti": "bread",
    "daging": "meat",
    "buah": "fruit",
    "sayur": "vegetable",
    "susu": "milk",
    "es": "ice",
    "krim": "cream",
    "kopi": "coffee",
    "teh": "tea",
    "jus": "juice",
    "waktu": "time",
    "jam": "hour",
    "menit": "minute",
    "detik": "second",
    "minggu": "week",
    "bulan": "month",
    "tahun": "year",
    "cuaca": "weather",
    "hujan": "rain",
    "salju": "snow",
    "matahari": "sun",
    "bintang": "star",
    "awan": "cloud",
    "angin": "wind",
    "merah": "red",
    "biru": "blue",
    "hijau": "green",
    "kuning": "yellow",
    "putih": "white",
    "hitam": "black",
    "oranye": "orange",
    "ungu": "purple",
    "angka": "number",
    "huruf": "letter",
    "kata": "word",
    "kalimat": "sentence",
    "apel": "apple",
    "jeruk": "orange",
    "pisang": "banana",
    "universitas": "university",
    "perpustakaan": "library",
    "komputer": "computer",
    "telepon": "phone",
    "internet": "internet",
    "mobil": "car",
    "sepeda": "bicycle",
    "kereta": "train",
    "pesawat": "airplane",
    "film": "movie",
    "musik": "music",
    "menari": "dance",
    "olahraga": "sport",
    "permainan": "game",
    "piano": "piano",
    "gitar": "guitar",
    "gereja": "church",
    "candi": "temple",
    "masjid": "mosque",
    "pakaian": "clothing",
    "sepatu": "shoes",
    "topi": "hat",
    "tas": "bag",
    "mobil": "car",
    "pegunungan": "mountain",
    "sungai": "river",
    "laut": "ocean",
    "pantai": "beach",
    "hutan": "forest",
    "ilmu pengetahuan": "science",
    "sejarah": "history",
    "inggris": "english",
    "matematika": "math",
    "fisika": "physics",
    "catur": "chess",
    "perusahaan": "company",
    "pemerintah": "government",
    "presiden": "president",
    "raja": "king",
    "ratu": "queen"
};

function transliterateToEnglish() {
    let indonesianWord = document.getElementById("indonesianWord").value.toLowerCase().trim();
    let resultDiv = document.getElementById("transliteResultReverse");
    
    if (indonesianWord === "") {
        resultDiv.innerText = "";
        return;
    }
    
    // Cek apakah kata ada di kamus terbalik
    if (reverseTransliterationDict[indonesianWord]) {
        resultDiv.innerText = reverseTransliterationDict[indonesianWord];
    } else {
        // Konversi fonetik lanjutan untuk Indonesia ke Inggris
        let result = indonesianToEnglishPhonetic(indonesianWord);
        resultDiv.innerText = result;
    }
}

function indonesianToEnglishPhonetic(word) {
    // Hapus spasi dan ubah ke fonetik sederhana
    word = word.replace(/\s+/g, '').replace(/[^a-z-]/g, '');
    word = word.replace(/-/g, '');
    
    if (word.length === 0) return "";
    
    let result = "";
    let i = 0;
    
    while (i < word.length) {
        let char = word[i];
        let nextChar = word[i + 1] || '';
        
        // Aturan fonetik Indonesia ke Inggris
        if (char === 'c') {
            result += 'ch';
            i += 1;
        } else if (char === 'j') {
            result += 'j';
            i += 1;
        } else if (char === 'y') {
            result += 'y';
            i += 1;
        } else if (char === 'x') {
            result += 'ks';
            i += 1;
        } else if (char === 'q') {
            result += 'kw';
            i += 1;
        } else if (char === 'w') {
            result += 'w';
            i += 1;
        } else if (char === 'v') {
            result += 'v';
            i += 1;
        } else if (char === 'z') {
            result += 'z';
            i += 1;
        } else if (char === 'a' && nextChar === 'i') {
            result += 'ai';
            i += 2;
        } else if (char === 'e' && nextChar === 'i') {
            result += 'ei';
            i += 2;
        } else if (char === 'o' && nextChar === 'i') {
            result += 'oi';
            i += 2;
        } else if (char === 'u' && nextChar === 'e') {
            result += 'ue';
            i += 2;
        } else if (char === 'a' && nextChar === 'u') {
            result += 'au';
            i += 2;
        } else if (char === 'n' && nextChar === 'g' && (i === word.length - 2 || !'aeiou'.includes(word[i + 2]))) {
            result += 'ng';
            i += 2;
        } else if (char === 'k' && (i === word.length - 1 || !'aeiou'.includes(nextChar))) {
            result += 'ck';
            i += 1;
        } else {
            result += char;
            i += 1;
        }
    }
    
    return result;
}
