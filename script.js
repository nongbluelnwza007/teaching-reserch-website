function toggleMenu(el) {
    el.parentElement.classList.toggle('active');
}

window.onload = () => {
    // รวมข้อมูลจากทุกไฟล์
    window.allPages = [
        ...(window.courseContentUnit || []), ...(window.courseContentUnit2 || []),
        ...(window.courseContentUnit3 || []), ...(window.courseContentUnit4 || []),
        ...(window.courseContentUnit5 || []), ...(window.courseContentUnit6 || []),
        ...(window.courseContentUnit7 || []), ...(window.courseContentUnit8 || []),
        ...(window.courseContentUnit9 || []), ...(window.courseContentUnit10 || [])
    ];
    
    window.allPages.forEach((page, i) => page.id = page.id || i);

    if (window.allPages.length === 0) {
        document.getElementById('page-content').innerHTML = "<h1>ไอ้สอง! ข้อมูลไม่มา!</h1>";
    } else {
        goToSlide(0); // เริ่มต้นที่หน้าแรก
    }
};

function renderPage(index) {
    const idx = parseInt(index);
    if (window.allPages[idx]) {
        const pageContent = document.getElementById('page-content');
        if (pageContent) {
            pageContent.innerHTML = window.allPages[idx].content;
            pageContent.scrollTop = 0; // Reset scroll position to top
        }
        document.getElementById('pageCounter').innerText = `หน้า ${idx + 1} / ${window.allPages.length}`;
        window.currentIndex = idx;
    }
}

function goToSlide(index, element = null) {
    if (index < 0 || index >= window.allPages.length) return;
    
    renderPage(index);

    // 1. ลบไฮไลต์เก่าออก
    document.querySelectorAll('.sub-item').forEach(item => item.classList.remove('active-menu'));

    // 2. ค้นหา element ที่ต้องไฮไลต์ (ถ้าไม่ได้คลิกโดยตรง)
    let targetItem = element;
    if (!targetItem) {
        document.querySelectorAll('.sub-item').forEach(item => {
            // เช็คเลข index ใน onclick
            if (item.getAttribute('onclick').includes(`goToSlide(${index},`)) {
                targetItem = item;
            }
        });
    }

    // 3. จัดการไฮไลต์ + การกาง/หุบเมนู
    if (targetItem) {
        targetItem.classList.add('active-menu');
        
        // เลื่อน Sidebar ให้เห็นเมนูที่เลือกอย่างปลอดภัย (ป้องกันหน้าจอบิดเบี้ยวขยับบนมือถือ)
        const menuScroll = document.querySelector('.menu-scroll');
        if (menuScroll) {
            const containerTop = menuScroll.getBoundingClientRect().top;
            const itemTop = targetItem.getBoundingClientRect().top;
            const relativeTop = itemTop - containerTop + menuScroll.scrollTop;
            menuScroll.scrollTo({
                top: relativeTop - menuScroll.clientHeight / 2 + targetItem.clientHeight / 2,
                behavior: 'smooth'
            });
        }
        
        // กางเฉพาะกลุ่มที่เลือก และปิดกลุ่มอื่น
        const activeGroup = targetItem.closest('.menu-group');
        document.querySelectorAll('.menu-group').forEach(group => {
            if (group === activeGroup) {
                group.classList.add('active'); // กางกลุ่มปัจจุบัน
            } else {
                group.classList.remove('active'); // ปิดกลุ่มอื่นทั้งหมด
            }
        });
    }

    // Auto-close sidebar on mobile after selecting a slide
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById("sidebar");
        const backdrop = document.getElementById("menuBackdrop");
        if (sidebar) sidebar.classList.remove("show");
        if (backdrop) backdrop.classList.remove("show");
    }
}

function changePage(step) {
    goToSlide(window.currentIndex + step, null);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast show " + type; // ใส่คลาสเพื่อเปลี่ยนสี
    
    // หายไปเองใน 3 วินาที
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}