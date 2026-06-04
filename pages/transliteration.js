const transliterationDict = {
    "hello": "halo",
    "bye": "selamat tinggal",
    "yes": "ya",
    "no": "tidak",
    "thank": "terima kasih",
    "thanks": "makasih",
    "please": "tolong",
    "sorry": "maaf",
    "excuse": "permisi",
    "good": "baik",
    "bad": "buruk",
    "morning": "pagi",
    "night": "malam",
    "day": "hari",
    "water": "air",
    "book": "buku",
    "pen": "pena",
    "paper": "kertas",
    "table": "meja",
    "chair": "kursi",
    "door": "pintu",
    "window": "jendela",
    "house": "rumah",
    "school": "sekolah",
    "office": "kantor",
    "hospital": "rumah sakit",

    "go": "pergi",
    "come": "datang",
    "see": "melihat",
    "hear": "mendengar",
    "eat": "makan",
    "drink": "minum",
    "sleep": "tidur",
    "wake": "bangun",
    "run": "lari",
    "walk": "berjalan",
    "sit": "duduk",
    "stand": "berdiri",
    "write": "menulis",
    "read": "membaca",
    "speak": "berbicara",
    "listen": "mendengarkan",
    "understand": "mengerti",
    "love": "cinta",
    "like": "suka",
    "want": "ingin",
    "need": "butuh",
    "help": "membantu",
    "work": "bekerja",
    "play": "bermain",
    "learn": "belajar",
    "teach": "mengajar",
    "know": "tahu",
    "think": "berpikir",
    "feel": "merasakan",
    "remember": "ingat",
    "forget": "lupa",
    "give": "memberi",
    "take": "mengambil",
    "make": "membuat",
    "do": "melakukan",
    "try": "mencoba",
    "ask": "bertanya",
    "answer": "jawaban",
    "tell": "memberitahu",
    "call": "memanggil",
    "find": "menemukan",
    "lose": "kehilangan",
    "begin": "memulai",
    "end": "akhir",
    "stop": "berhenti",
    "start": "mulai",
    "open": "buka",
    "close": "tutup",
    "buy": "membeli",
    "sell": "menjual",
    "pay": "membayar",
    "show": "menunjukkan",
    "watch": "menonton",

    "big": "besar",
    "small": "kecil",
    "fast": "cepat",
    "slow": "lambat",
    "hot": "panas",
    "cold": "dingin",
    "warm": "hangat",
    "cool": "sejuk",
    "high": "tinggi",
    "low": "rendah",
    "long": "panjang",
    "short": "pendek",
    "happy": "senang",
    "sad": "sedih",
    "angry": "marah",
    "tired": "lelah",
    "hungry": "lapar",
    "thirsty": "haus",
    "sick": "sakit",
    "healthy": "sehat",
    "strong": "kuat",
    "weak": "lemah",
    "beautiful": "cantik",
    "ugly": "jelek",
    "clean": "bersih",
    "dirty": "kotor",
    "dark": "gelap",
    "light": "terang",
    "soft": "lembut",
    "hard": "keras",
    "easy": "mudah",
    "difficult": "sulit",
    "possible": "mungkin",
    "impossible": "tidak mungkin",
    "dangerous": "berbahaya",
    "safe": "aman",
    "expensive": "mahal",
    "cheap": "murah",
    "rich": "kaya",
    "poor": "miskin",
    "young": "muda",
    "old": "tua",
    "new": "baru",
    "fresh": "segar",
    "dry": "kering",
    "wet": "basah",
    "sweet": "manis",
    "bitter": "pahit",
    "sour": "asam",
    "salty": "asin"
};

function transliterateWord() {
    let englishWord = document.getElementById("englishWord").value.toLowerCase().trim();
    let resultDiv = document.getElementById("transliteResult");
    
    if (englishWord === "") {
        resultDiv.innerText = "";
        return;
    }
    
    if (transliterationDict[englishWord]) {
        resultDiv.innerText = transliterationDict[englishWord];
    } else {
        let result = advancedTransliterate(englishWord);
        resultDiv.innerText = result;
    }
}

function advancedTransliterate(word) {
    word = word.replace(/\s+/g, '').replace(/[^a-z]/g, '');
    
    if (word.length === 0) return "";
    
    let result = "";
    let i = 0;
    
    while (i < word.length) {
        let char = word[i];
        let nextChar = word[i + 1] || '';
        let nextNextChar = word[i + 2] || '';
        
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
            if (nextChar === 'e' || nextChar === 'i' || nextChar === 'y') {
                result += 's';
            } else {
                result += 'k';
            }
            i += 1;
        } else if (char === 'g') {
            if (nextChar === 'e' || nextChar === 'i' || nextChar === 'y') {
                result += 'j';
            } else {
                result += 'g';
            }
            i += 1;
        } else if (char === 's') {
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
            if (i === 0 && word[1] !== 'h') {
                result += 'h';
            } else if (i > 0 && word[i - 1] !== 'c' && word[i - 1] !== 's' && word[i - 1] !== 't') {
                result += 'h';
            }
            i += 1;
        } else if (char === 'e' && i === word.length - 1) {
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
    
    result = addSyllableBreaks(result);
    
    return result;
}

function addSyllableBreaks(word) {
    if (word.length <= 3) return word;
    
    let result = "";
    let vowels = 'aiou';
    
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let nextChar = word[i + 1] || '';
        let nextNextChar = word[i + 2] || '';
        
        result += char;
        
        if (vowels.includes(char) && 
            !vowels.includes(nextChar) && nextChar !== '' &&
            !vowels.includes(nextNextChar) && nextNextChar !== '' &&
            !(char === '-')) {
            result += '-';
        }
    }
    
    if (result.endsWith('-')) {
        result = result.slice(0, -1);
    }
    
    result = result.replace(/-+/g, '-');
    
    return result;
}

const reverseTransliterationDict = {
    "halo": "hello",
    "kamu": "you",
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
    "berbicara": "talk",
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
    "kapan": "when",
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
    "komputer": "computer",
    "telepon": "telephone",
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

    "pakaian": "clothes",
    "sepatu": "shoes",
    "topi": "hat",
    "tas": "bag",

    "pegunungan": "mountain",
    "sungai": "river",
    "laut": "ocean",
    "pantai": "beach",
    "hutan": "forest",

    "ilmu pengetahuan": "science",
    "sejarah": "history",
    "inggris": "english",
    "matematika": "mathematics",
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
    
    if (reverseTransliterationDict[indonesianWord]) {
        resultDiv.innerText = reverseTransliterationDict[indonesianWord];
    } else {
        let result = indonesianToEnglishPhonetic(indonesianWord);
        resultDiv.innerText = result;
    }
}

function indonesianToEnglishPhonetic(word) {
    word = word.replace(/\s+/g, '').replace(/[^a-z-]/g, '');
    word = word.replace(/-/g, '');
    
    if (word.length === 0) return "";
    
    let result = "";
    let i = 0;
    
    while (i < word.length) {
        let char = word[i];
        let nextChar = word[i + 1] || '';
        
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
