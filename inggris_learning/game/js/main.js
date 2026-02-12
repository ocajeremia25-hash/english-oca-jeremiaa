// Navigasi antar bagian aplikasi
function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
