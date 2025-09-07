const sectionIds = ['home', 'courses', 'course-detail'];

/**
 * Show selected section, hide others
 */
function showSection(id) {
  sectionIds.forEach(section => {
    document.getElementById(section).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

/**
 * Open course details
 */
function openCourse(title, videoUrl) {
  showSection('course-detail');
  document.getElementById('course-title').innerText = title;
  document.getElementById('course-video').src = videoUrl;
  document.getElementById('progress').style.width = '0%';
}

/**
 * Increase course progress (in 20% steps)
 */
function increaseProgress() {
  const progressEl = document.getElementById('progress');
  let width = parseInt(progressEl.style.width) || 0;

  if (width < 100) {
    width += 20;
    progressEl.style.width = width + '%';
  }
}
