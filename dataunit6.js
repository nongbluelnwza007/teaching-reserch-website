window.courseContentUnit6 = [
    {
        title: "6.1 สถาปัตยกรรมของระบบปฏิบัติการ",
        content: `
            <h1>6.1 สถาปัตยกรรมของระบบปฏิบัติการ (Architecture of OS)</h1>
            <p>ระบบปฏิบัติการทำหน้าที่ควบคุมทรัพยากรระดับฮาร์ดแวร์ จัดคิวงาน และให้บริการพื้นฐานกับแอปพลิเกชันเชิงสิทธิ์เข้าถึง (Privilege Rings):</p>
            
            <div class="callout-box">
                <h3>1. วงแหวนสิทธิ์การเข้าถึงระดับฮาร์ดแวร์ (CPU Privilege Ring Topology)</h3>
                <ul>
                    <li><strong>Kernel Mode (Ring 0):</strong> วงแหวนสิทธิ์ระดับล่างสุด มีสิทธิ์ในการเขียนชุดคำสั่งควบคุมหน่วยประมวลผล หน่วยความจำ และฮาร์ดแวร์อิเล็กทรอนิกส์ได้โดยตรงอย่างไร้ขีดจำกัด ชิ้นส่วน Kernel และไดรเวอร์หลักจะรันอยู่ในระดับนี้ หากโปรแกรมใดเกิดข้อผิดพลาดเชิงโครงสร้างใน Ring 0 ระบบปฏิบัติการจะเรียกใช้ฟังก์ชันขัดจังหวะฉุกเฉิน และขึ้นจอฟ้า <strong>BSOD (Blue Screen of Death)</strong> ทันทีเพื่อป้องกันไม่ให้ข้อมูลใน SSD เกิดความเสียหายถาวร</li>
                    <li><strong>Device Drivers (Ring 1 &amp; 2):</strong> ใช้รันไดรเวอร์อุปกรณ์เสริมหรือบริการระบบบางชนิด (มักรวมเข้ากับ Ring 0 ในระบบปฏิบัติการทั่วไป)</li>
                    <li><strong>User Mode (Ring 3):</strong> พื้นที่จัดสรรให้ซอฟต์แวร์แอปพลิเคชันทั่วไปรันทำงาน (เช่น เว็บเบราว์เซอร์, เกม, โปรแกรม Office) โดยโปรแกรมใน Ring 3 จะไม่มีสิทธิ์ควบคุมหรือเข้าถึงทรัพยากรฮาร์ดแวร์โดยตรง หากเกิดข้อผิดพลาดค้างขึ้นมา OS สามารถปิดโปรแกรมนั้น (Kill Process) ทิ้งได้ทันทีโดยที่ตัวแกนระบบหลักไม่พังไปด้วย</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. เลเยอร์เชื่อมอุปกรณ์ระดับกลาง (HAL - Hardware Abstraction Layer)</h3>
                <p>เปรียบเสมือนตัวแปลสัญญาณคำสั่งระดับสากล ทำหน้าที่ครอบฮาร์ดแวร์ทุกประเภท ทุกแบรนด์บนโลก เพื่อสร้างอินเตอร์เฟซจำลองคำสั่งแบบเดียวกันให้ตัว Kernel สั่งงาน ส่งผลให้โปรแกรมเมอร์เขียนโปรแกรมสั่งเซฟไฟล์ได้โดยไม่ต้องเขียนโค้ดแยกตามรุ่นยี่ห้อ SSD</p>
            </div>

            <div style="display: flex; justify-content: space-between; gap: 15px; margin: 25px auto; max-width: 900px;">
                <img src="images/kernel.png" style="width: 32%; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.4);">
                <img src="images/hal.png" style="width: 32%; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.4);">
                <img src="images/app.png" style="width: 32%; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.4);">
            </div>
        `
    },
    {
        title: "6.2 การเตรียมตัวระดับมืออาชีพ",
        content: `
            <h1>6.2 การเตรียมตัวระดับมืออาชีพ (Partition Topology &amp; Boot Media)</h1>
            <p>ก่อนลงมือติดตั้งระบบปฏิบัติการ ช่างระดับอาชีพจำเป็นต้องวิเคราะห์และเตรียมผังดิสก์รวมถึงแฟลชไดรฟ์ติดตั้งให้ถูกต้อง:</p>
            
            <div class="callout-box">
                <h3>1. ผังโครงสร้างพาร์ทิชันมาตรฐานของ Windows UEFI (GPT Partition Scheme)</h3>
                <p>เมื่อเราติดตั้ง Windows บนดิสก์ระบบ GPT ภายใต้โหมด UEFI ระบบจะทำแบ่งพาร์ทิชันระบบย่อยอัตโนมัติ 4 ส่วน ดังนี้:</p>
                <ul>
                    <li><strong>EFI System Partition (ESP) (~100MB):</strong> ฟอร์แมตด้วยระบบไฟล์ FAT32 เป็นพาร์ทิชันเก็บไฟล์เริ่มต้นระบบหลักของ Windows (.efi bootloaders) ที่เมนบอร์ดไบออสจะเข้ามาอ่านเป็นอันดับแรก</li>
                    <li><strong>MSR Partition (Microsoft Reserved) (16MB):</strong> พาร์ทิชันลับที่จองไว้เพื่อเก็บบันทึกรหัสโครงสร้างดิสก์เฉพาะการทำงานของ Windows</li>
                    <li><strong>Primary Partition (C:) (ขนาดพื้นที่หลัก):</strong> ฟอร์แมตด้วยระบบไฟล์ <strong>NTFS</strong> เป็นไดรฟ์ที่ติดตั้งไฟล์ระบบ หน้าต่างโปรแกรม และข้อมูลทั้งหมด</li>
                    <li><strong>Recovery Partition (WinRE) (~500MB - 1GB):</strong> เก็บไฟล์สำรองเครื่องมือวินิจฉัยแก้ไขปัญหายามเครื่องบูตไม่ติด (Windows Recovery Environment)</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. การเตรียมตัวบูตแฟลชไดรฟ์ (USB Installation Media)</h3>
                <p>ใช้โปรแกรมดาวน์โหลด ISO อย่างเป็นทางการ หรือเครื่องมือเขียนเขียนไฟล์บูต เช่น Rufus โดยกำหนดให้แปลงรูปแบบพาร์ทิชันของ USB แฟลชไดรฟ์เป็นระบบไฟล์ <strong>FAT32</strong> เท่านั้น (เนื่องจากข้อกำหนดมาตรฐาน UEFI จะไม่สามารถเข้าตรวจค้นไดรฟ์ประเภท NTFS ได้ขณะที่ระบบยังไม่ได้เริ่มบูต Windows) และเลือกแผนผังพาร์ทิชันเป็น <strong>GPT</strong> เสมอ</p>
            </div>
        `
    },
    {
        title: "6.3 การติดตั้ง Windows 10",
        content: `
            <h1>6.3 การติดตั้ง Windows 10 (Legacy &amp; UEFI Hybrid)</h1>
            <p>Windows 10 รองรับการเข้ากันได้แบบย้อนหลังอย่างดีเยี่ยม รองรับการติดตั้งแบบไฮบริด:</p>

            <div class="callout-box">
                <h3>กระบวนการบูตและการติดตั้งขั้นวิศวกรรม</h3>
                <ol>
                    <li>ตั้งค่าลำดับการบูตในไบออสให้เลือก USB Flash Drive เป็นลำดับที่ 1 บูตเข้าสู่โปรแกรมติดตั้ง</li>
                    <li>เข้าสู่หน้าจัดการจัดการฮาร์ดดิสก์ หากพบโครงสร้างข้อมูลขัดแย้งเดิม (เช่น ดิสก์เดิมเป็น MBR แต่เราเลือกบูตแบบ UEFI) ให้ใช้คีย์ลัดด่วนเปิดหน้าต่าง Command Prompt โดยกดปุ่ม <strong>Shift + F10</strong> เพื่อเรียกใช้โปรแกรมจัดตั้งพาร์ทิชันดิสก์ระดับต่ำ <code>diskpart</code>:
                        <div class="code-block">diskpart
list disk
select disk [ระบุหมายเลขดิสก์ที่จะล้าง เช่น select disk 0]
clean (คำเตือน: ข้อมูลเดิมในดิสก์จะถูกลบทั้งหมด)
convert gpt
exit</div>
                    </li>
                    <li>เลือกไดรฟ์ที่ล้างข้อมูลเรียบร้อย กด "New" เพื่อสร้างระบบพาร์ทิชันระบบ 4 ตัว แล้วเลือกไดรฟ์ C: หลัก กดติดตั้ง (Next) เพื่อก๊อปปี้ไฟล์และสร้างรังผึ้งลงทะเบียน (Registry Hives) ลงบนดิสก์</li>
                </ol>
            </div>

            <img src="images/win10.png" alt="win10" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "6.4 การติดตั้ง Windows 11",
        content: `
            <h1>6.4 การติดตั้ง Windows 11 (Security-First Architecture)</h1>
            <p>Windows 11 มีระบบความปลอดภัยเข้มงวด มุ่งลดความเสี่ยงจากการโจมตีของไวรัสและช่องโหว่ฮาร์ดแวร์:</p>

            <div class="callout-box box-danger">
                <h3>เงื่อนไขบังคับทางฮาร์ดแวร์ระบบ</h3>
                <ul>
                    <li>ต้องเปิดใช้งานโหมดบูตแบบ <strong>UEFI Native</strong> และรองรับ <strong>Secure Boot</strong> เท่านั้น (ตัดสิทธิ์โหมด Legacy บูตทั้งหมด)</li>
                    <li>ต้องเปิดชิปเก็บรหัสความปลอดภัย <strong>TPM 2.0 (Trusted Platform Module)</strong></li>
                    <li>ต้องการ CPU รุ่นใหม่ (Intel Gen 8 ขึ้นไป หรือ AMD Ryzen Gen 2 ขึ้นไป)</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>สูตรลับการเลี่ยงเงื่อนไขบังคับใช้อินเทอร์เน็ตระหว่างหน้าการติดตั้ง (Bypass OOBE Network Requirement)</h3>
                <p>ในหน้าตั้งค่าเครื่องเริ่มแรก (OOBE) ระบบจะบังคับให้เราต่อเครือข่ายอินเทอร์เน็ตและลงชื่อเข้าใช้ Microsoft Account หากเราจำเป็นต้องลงแบบไม่มีอินเทอร์เน็ต หรือต้องการสร้างบัญชีแบบเก็บข้อมูลในเครื่อง (Local Offline Account) ให้ดำเนินการดังนี้:</p>
                <ol>
                    <li>ในหน้าจอเชื่อมต่อเน็ต ให้กดปุ่มคีย์ลัดด่วน <strong>Shift + F10</strong> บนแป้นพิมพ์เพื่อเปิดหน้าต่าง Command Prompt</li>
                    <li>พิมพ์คำสั่งเขียนโค้ดบายพาสระบบตรวจสอบลงไปตรงๆ: <code>OOBE\\BYPASSNRO</code> แล้วกด <strong>Enter</strong></li>
                    <li>คอมพิวเตอร์จะรีบูตตัวเองหนึ่งครั้ง และกลับมาที่หน้าเดิม แต่จะมีตัวเลือกเพิ่มขึ้นมามุมซ้ายล่างระบุ <strong>"I don't have internet"</strong> (ฉันไม่มีอินเทอร์เน็ต) ให้คลิกเลือก แล้วกดยืนยันสร้างบัญชีผู้ใช้ใช้งานแบบออฟไลน์ได้ทันที</li>
                </ol>
            </div>

            <img src="images/win11.png" alt="win11" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "6.5 การปรับแต่งระบบหลังติดตั้ง",
        content: `
            <h1>6.5 การปรับแต่งและจูนระบบหลังการติดตั้ง (Post-Installation Tuning)</h1>
            <p>ช่างเทคนิคผู้ดูแลระบบต้องดำเนินการปรับปรุงเสถียรภาพ และปลดล็อกความเร็วเครื่องหลังบูตเข้าวินโดว์สำเร็จครั้งแรกดังนี้:</p>

            <div class="callout-box">
                <h3>1. ตรวจสอบและลงไดรเวอร์ผ่านค่าฮาร์ดแวร์ไอดี (Hardware ID Investigation)</h3>
                <p>หากเข้าไปที่หน้า Device Manager แล้วพบสัญลักษณ์เครื่องหมายตกใจสีเหลืองใต้หัวข้อ <strong>"Unknown Device"</strong> หมายถึงวินโดว์ไม่รู้จักอุปกรณ์นั้น ช่างเทคนิคสามารถค้นหาไดรเวอร์แท้ตรงชิ้นส่วนได้โดย:</p>
                <ul>
                    <li>คลิกขวาที่ชื่ออุปกรณ์ เลือก Properties &gt; เข้าแท็บ Details &gt; ปรับช่อง Value เป็น <strong>Hardware Ids</strong></li>
                    <li>ให้ก๊อปปี้รหัสสัญลักษณ์ เช่น <code>VEN_8086&DEV_15F2</code> (VEN = Vendor ID แบรนด์ผู้ผลิตชิป เช่น 8086 คือชิป Intel, DEV = Device ID เลขรุ่นเฉพาะชิ้นส่วน) นำรหัสรหัสไปพิมพ์ค้นหาในเสิร์ชเอนจิ้น เพื่อหาเว็บดาวน์โหลดไดรเวอร์ที่ตรงรุ่นมาติดตั้ง</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. การปรับปรุงระบบหน่วยความจำจำลอง (Virtual Memory / Pagefile Config)</h3>
                <p>หน้ากระดาษจำลองแรม <code>Pagefile.sys</code> ป้องกันระบบค้างในกรณีแรมระบบ (Physical RAM) เต็ม โดยเฉพาะเมื่อรันโปรแกรมขนาดใหญ่:</p>
                <ul>
                    <li>เข้าไปปรับค่า Advanced System Settings &gt; Performance &gt; Virtual Memory</li>
                    <li>กำหนดขนาดหน่วยความจำจำลองแบบกำหนดเอง (Custom Size) โดย <strong>แนะนำให้ป้อนขนาด Initial Size และ Maximum Size เป็นตัวเลขเดียวกันเสมอ</strong> (เช่น ป้อนค่า 8192 MB) เพื่อลดความลื่นไหลจากการขยายขนาดสลับยืดหดของไฟล์ไปมาบนฮาร์ดดิสก์ ซึ่งเป็นสาเหตุของการเกิดรอยแยกไฟล์และการเขียนอ่านข้อมูลซ้ำซ้อนจนเครื่องช้า</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>3. การจัดการความมั่นคงและความเป็นส่วนตัว (Telemetry &amp; Startup Cleanup)</h3>
                <ul>
                    <li>ใช้ Task Manager เข้าสู่แท็บ <strong>Startup Apps</strong> เลือก Disable ปิดซอฟต์แวร์ที่ไม่สำคัญไม่ให้รันโหลดขึ้นมาตอนเปิดเครื่อง</li>
                    <li>เข้าไปตั้งค่าใน Windows Services (พิมพ์คำสั่ง <code>services.msc</code>) หาบริการชื่อ <em>Connected User Experiences and Telemetry</em> ปรับตั้งเป็น Disabled เพื่อปิดระบบเก็บสถิติและส่งข้อมูลเบื้องหลังของวินโดว์กลับเซิร์ฟเวอร์หลัก ซึ่งกินทรัพยากรบัสเครื่องโดยไม่มีความจำเป็น</li>
                </ul>
            </div>

            <img src="images/post.png" alt="post" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    }
];