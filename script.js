// إضافة الأرقام والعمليات إلى الشاشة
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// حساب النتيجة
function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression); // حساب النتيجة
    } catch (error) {
        document.getElementById('display').value = 'خطأ'; // إذا حدث خطأ في الحساب
    }
}

// مسح الشاشة
function clearDisplay() {
    document.getElementById('display').value = ''; // مسح المحتوى من شاشة العرض
}

// تبديل الوضع الفاتح والليلي
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    let modeText = document.getElementById('mode-text');
    let modeIcon = document.getElementById('mode-icon');

    if (document.body.classList.contains('night-mode')) {
        modeText.textContent = 'الوضع الفاتح';
        modeIcon.textContent = '🌙';
    } else {
        modeText.textContent = 'الوضع الليلي';
        modeIcon.textContent = '🌑';
    }
}
