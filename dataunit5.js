window.courseContentUnit5 = [
    {
        title: "5.1 BIOS และ UEFI: ต่างกันอย่างไร?",
        content: `
            <h1>5.1 BIOS และ UEFI ต่างกันอย่างไร?</h1>
            <p>บูตโหลดเดอร์เฟิร์มแวร์ระบบทำหน้าที่เป็นตัวกลางทดสอบอุปกรณ์หลังเปิดเครื่อง และเริ่มต้นระบบปฏิบัติการเข้าสู่หน่วยความจำหลัก มีสองสถาปัตยกรรมที่แตกต่างกันชัดเจนดังนี้:</p>
            
            <table style="width:100%; border-collapse:collapse; margin:15px 0;">
                <thead>
                    <tr>
                        <th style="padding:10px; text-align:left; width:25%;">หัวข้อเปรียบเทียบ</th>
                        <th style="padding:10px; text-align:left; width:35%;">Legacy BIOS (แบบดั้งเดิม)</th>
                        <th style="padding:10px; text-align:left; width:40%;">UEFI (สถาปัตยกรรมสมัยใหม่)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:10px; font-weight:bold;">โหมดการทำงาน</td>
                        <td style="padding:10px;">16-bit Real Mode (เข้าถึงแรมระบบได้จำกัดเพียง 1 MB แรก)</td>
                        <td style="padding:10px;">32-bit หรือ 64-bit Protected Mode (เข้าถึงแรมระบบได้ทั้งหมด บูตได้รวดเร็ว)</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; font-weight:bold;">รูปแบบการแบ่งพาร์ทิชันดิสก์</td>
                        <td style="padding:10px;">MBR (Master Boot Record) จำกัดขนาดดิสก์บูตไม่เกิน 2.2 TB และสร้างพาร์ทิชันหลักได้สูงสุด 4 ส่วน</td>
                        <td style="padding:10px;">GPT (GUID Partition Table) รองรับขนาดดิสก์ได้สูงสุด 9.4 ZB (Zettabytes) และสร้างพาร์ทิชันหลักได้สูงสุด 128 ส่วน</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; font-weight:bold;">ส่วนติดต่อผู้ใช้ (UI)</td>
                        <td style="padding:10px;">Text-based (หน้าจออักษรสีขาวบนพื้นน้ำเงิน ควบคุมด้วยคีย์บอร์ดเท่านั้น)</td>
                        <td style="padding:10px;">GUI (Graphical User Interface มีสีสันสวยงาม รองรับการควบคุมด้วยเมาส์)</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; font-weight:bold;">ระบบความปลอดภัยการบูต</td>
                        <td style="padding:10px;">ไม่มีระบบตรวจสอบสิทธิ์ เสี่ยงต่อการโดนไวรัสประเภท Bootkit/Rootkit แทรกแซงไฟล์บูต</td>
                        <td style="padding:10px;">มีระบบ <strong>Secure Boot</strong> ตรวจสอบลายเซ็นดิจิทัลของ Bootloader เพื่อป้องกันมัลแวร์บูตก่อนระบบปฏิบัติการ</td>
                    </tr>
                    <tr>
                        <td style="padding:10px; font-weight:bold;">การสนับสนุนโปรโตคอล</td>
                        <td style="padding:10px;">ทำงานจำกัด ไม่รู้จักโปรโตคอลไดรเวอร์แบบซับซ้อน</td>
                        <td style="padding:10px;">รองรับไดรเวอร์ NVMe Native, เชื่อมต่อเน็ตเวิร์กอัปเดตตรงผ่านคลาวด์ได้โดยไม่ต้องเข้า OS</td>
                    </tr>
                </tbody>
            </table>

            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/legacy.png" style="width: 48%; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.4);">
                <img src="images/uefi.png" style="width: 48%; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.4);">
            </div>
        `
    },
    {
        title: "5.2 การตั้งค่า BIOS และ UEFI",
        content: `
            <h1>5.2 พารามิเตอร์การตั้งค่าหลักใน BIOS และ UEFI</h1>
            <p>การปรับตั้งค่าระบบอย่างเป็นทางการมีตัวแปรเทคนิคควบคุมเสถียรภาพและความเข้ากันดังนี้:</p>
            
            <div class="callout-box">
                <h3>1. ลำดับความสำคัญในการบูต (Boot Priority Order)</h3>
                <p>การจัดลำดับการค้นหาไฟล์ Bootloader จากดิสก์หรือไดรฟ์ภายนอก เช่น การกำหนดให้บูตจาก USB Flash Drive เป็นอันดับที่ 1 เพื่อเริ่มขั้นตอนการติดตั้ง OS และกู้คืนระบบ จากนั้นย้ายลำดับ HDD/SSD หลักขึ้นมาเป็นลำดับที่ 1 หลังติดตั้งเสร็จ</p>
            </div>

            <div class="callout-box">
                <h3>2. การเปิดประวัติความเร็วแรมผู้ผลิต (XMP / EXPO Profiles)</h3>
                <p>แรม DDR4 และ DDR5 ปัจจุบันจะวิ่งที่ความเร็วมาตรฐาน JEDEC เริ่มต้นต่ำ (เช่น DDR5 วิ่งที่ 4800 MT/s) เพื่อความเสถียรสูงสุด ช่างเทคนิคต้องเปิดฟังก์ชัน <strong>Intel XMP (Extreme Memory Profile)</strong> หรือ <strong>AMD EXPO</strong> ในหน้าไบออส เพื่ออนุญาตให้เมนบอร์ดดึงค่าความถี่ แรงดันไฟฟ้าเลี้ยง (เช่น 1.35V) และอัตราหน่วงเวลาที่ผ่านการทดสอบมาจากโรงงานแรม เพื่อทำความเร็วสูงสุดตามโฆษณา (เช่น 6000 MT/s)</p>
            </div>

            <div class="callout-box">
                <h3>3. โหมดการเชื่อมต่อดิสก์เก็บข้อมูล (SATA Controller Mode)</h3>
                <ul>
                    <li><strong>AHCI (Advanced Host Controller Interface):</strong> โหมดมาตรฐานสำหรับ SSD/HDD ทั่วไปเพื่อปลดล็อกระบบต่อพ่วงความเร็วสูงและคำสั่งจัดคิว NCQ</li>
                    <li><strong>RAID:</strong> โหมดเชื่อมโยงดิสก์หลายลูกให้ควบรวมทำงานเป็นพาร์ทิชันเดียวเพื่อประสิทธิภาพหรือระบบสำรองความปลอดภัย</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>4. ตัวแปรด้านความปลอดภัยและการจำลองเสมือน (TPM &amp; Virtualization)</h3>
                <ul>
                    <li><strong>Intel PTT / AMD fTPM:</strong> ต้องเปิดใช้งานเพื่อให้บอร์ดเปิดฟังก์ชัน TPM 2.0 เสมือนบน CPU ซึ่งเป็นเงื่อนไขบังคับในการติดตั้ง Windows 11</li>
                    <li><strong>Intel VT-x / AMD SVM Mode:</strong> ปลดล็อกให้สิทธิ์ CPU ในการประมวลผลการจำลองเสมือนระดับฮาร์ดแวร์ สำหรับซอฟต์แวร์จำพวก Virtual Machine เช่น VMware, VirtualBox หรือระบบย่อย WSL2 ใน Windows</li>
                </ul>
            </div>
        `
    },
    {
        title: "5.3 ตัวอย่างการตั้งค่า BIOS แบบเก่า (Legacy)",
        content: `
            <h1>5.3 ตัวอย่างการตั้งค่า BIOS แบบเก่า (Legacy)</h1>
            <p>ลักษณะหน้าจอแสดงผลและส่วนควบคุมของเมนูอินเตอร์เฟซแบบข้อความน้ำเงิน-ขาว:</p>
            
            <div class="callout-box">
                <h3>การนำทางหน้าจอด้วยคีย์บอร์ด</h3>
                <ul>
                    <li>ใช้ปุ่มลูกศร <strong>&larr; &rarr;</strong> สลับแท็บกลุ่มเมนูหลักด้านบน (Main, Advanced, Security, Boot, Exit)</li>
                    <li>ใช้ปุ่มลูกศร <strong>&uarr; &darr;</strong> เพื่อเลื่อนหัวข้อย่อย และกด <strong>Enter</strong> เพื่อเข้าเลือกเปลี่ยนค่า</li>
                    <li>ใช้ปุ่มเครื่องหมายบวก/ลบ <strong>+ / -</strong> หรือปุ่ม <strong>Page Up / Page Down</strong> เพื่อสลับลำดับอุปกรณ์บูตในเมนู Boot Device Priority</li>
                    <li>กดปุ่ม <strong>F10</strong> เสมอเพื่อเรียกหน้าต่างบันทึกยืนยันและรีบูตระบบ (Save and Exit)</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>ฟีเจอร์ CSM (Compatibility Support Module)</h3>
                <p>บนเมนบอร์ดระบบ UEFI สมัยใหม่ หากต้องการนำฮาร์ดดิสก์เดิมที่แบ่งโครงสร้างระบบแบบ MBR และมี Windows เวอร์ชั่นเก่าติดตั้งอยู่มาบูตใช้งาน ช่างต้องตั้งค่าเปิดใช้งานฟังก์ชัน <strong>CSM</strong> เพื่อจำลองความเข้ากันได้แบบโหมดเก่า (Legacy Boot Emulation) อย่างไรก็ตาม การเปิด CSM จะปิดกั้นการใช้ระบบ Secure Boot และการใช้งาน UEFI GPT Native</p>
            </div>

            <img src="images/legacy_setting.png" alt="legacy_setting" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "5.4 ตัวอย่างการตั้งค่า BIOS แบบ UEFI (Modern)",
        content: `
            <h1>5.4 ตัวอย่างการตั้งค่า BIOS แบบ UEFI (Modern)</h1>
            <p>ส่วนติดต่อผู้ใช้ของ UEFI ได้รับการปรับปรุงโครงสร้างให้รองรับความยืดหยุ่นสูง โดยแบ่งเมนูออกเป็นสองโหมดหลัก:</p>

            <div class="callout-box">
                <h3>1. โหมดใช้งานด่วน (Easy Mode - EZ Mode)</h3>
                <p>หน้าแสดงผลข้อมูลภาพรวมทั้งหมดของเครื่องเพื่อให้อ่านง่าย เหมาะสำหรับผู้เริ่มประกอบหรือการตรวจเช็คด่วน:</p>
                <ul>
                    <li>แดชบอร์ดระบุสถานะอุณหภูมิ CPU และเมนบอร์ด แบบเวลาจริง</li>
                    <li>แสดงสถานะและจำนวนรอบพัดลมระบายความร้อน</li>
                    <li>สลับเปิด/ปิดค่าไฟล์โอเวอร์คล็อกแรมด่วน (XMP/EXPO Toggle)</li>
                    <li>จัดลำดับความสำคัญการบูตผ่านการใช้เมาส์คลิก <strong>ลากแล้ววาง (Drag and Drop)</strong> ลำดับไอคอนไดรฟ์เก็บข้อมูล</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. โหมดปรับแต่งขั้นสูง (Advanced Mode)</h3>
                <p>เข้าสู่โหมดปรับแต่งแบบละเอียดยิบ โดยสลับกดปุ่ม <strong>F7</strong> บนคีย์บอร์ด:</p>
                <ul>
                    <li><strong>Tweaker / OC Menu:</strong> เมนูปรับค่าความถี่สัญญาณนาฬิกา และแรงดันกระแสไฟเลี้ยงชิปประมวลผลและแรมอย่างอิสระ</li>
                    <li><strong>Hardware Monitor / Q-Fan Control:</strong> วาดกราฟเส้นอุณหภูมิเพื่อกำหนดเงื่อนไขระดับเปอร์เซ็นต์กำลังรอบการหมุนพัดลมตามค่าความร้อน</li>
                </ul>
            </div>

            <img src="images/uefi_setting.png" alt="uefi_setting" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "5.5 การปรับปรุงข้อมูลใน BIOS (BIOS Update)",
        content: `
            <h1>5.5 การแฟลชอัปเดตข้อมูลไบออส (BIOS/UEFI Firmware Flashing)</h1>
            <p>การอัปเดตเฟิร์มแวร์เพื่อแก้ไขข้อผิดพลาดทางเทคนิคระดับไมโคร ป้องกันช่องโหว่ความปลอดภัย หรือปลดล็อกให้เมนบอร์ดรองรับ CPU รุ่นใหม่ถัดไป:</p>

            <div class="callout-box box-warning">
                <h3>ความเสี่ยงเชิงโครงสร้างฮาร์ดแวร์</h3>
                <p>การอัปเดตไบออสคือการเขียนข้อมูลใหม่ลงบนชิปหน่วยความจำถาวร <strong>หากเกิดเหตุการณ์ไฟฟ้าดับ ปลั๊กหลุด หรือระบบเกิดอาการค้างระหว่างดำเนินการเขียน (Flashing 0% - 100%) ข้อมูลภายในชิปจะเสียหายทันทีและส่งผลให้เมนบอร์ดเปิดไม่ติดอีกเลย (เมนบอร์ดตาย หรือ Bricked Board)</strong></p>
                <p>ช่างเทคนิคจึงควรเชื่อมต่อคอมพิวเตอร์เข้ากับระบบจ่ายไฟ UPS เสมอก่อนดำเนินการอัปเดตไบออส</p>
            </div>

            <div class="callout-box">
                <h3>ขั้นตอนการดำเนินการอัปเดตมาตรฐาน</h3>
                <ol>
                    <li>ตรวจสอบรุ่นบอร์ดที่แน่นอนและรุ่นเวอร์ชัน (Revision เช่น Rev 1.0 หรือ 2.0) โดยใช้คำสั่ง <code>msinfo32</code> ใน Windows หรือดูรายละเอียดพิมพ์บนหน้าแผ่นบอร์ด</li>
                    <li>ดาวน์โหลดไฟล์เฟิร์มแวร์รุ่นล่าสุดจากเว็บสนับสนุนของผู้ผลิตตรงรุ่น แตกไฟล์บีบอัดนำไฟล์อัปเดต (.bin หรือ .cap) ย้ายใส่ลงใน USB Flash Drive</li>
                    <li>ฟอร์แมต USB ไดรฟ์ต้องใช้ระบบไฟล์เป็น <strong>FAT32</strong> เท่านั้น เพื่อให้ระบบพอร์ตของตัว UEFI ไบออสเข้าอ่านไฟล์ตั้งแต่เริ่มได้</li>
                    <li>รีบูตระบบเข้าสู่ไบออส เรียกใช้งานเมนูแฟลชบอร์ดของแต่ละค่าย (เช่น ASUS EZ Flash, GIGABYTE Q-Flash, MSI M-Flash)</li>
                    <li>ระบุเลือกไดรฟ์ USB และเลือกไฟล์อัปเดต กดยืนยันแล้วรอจนระบบแถบความคืบหน้าครบ 100% ห้ามปิดระบบหรือถอดไดรฟ์ออกเด็ดขาดจนกว่าเมนบอร์ดจะทำการบูตรีสตาร์ทตัวเอง</li>
                </ol>
                <p><em>เทคโนโลยีช่วยชีวิต:</em> เมนบอร์ดสมัยใหม่บางรุ่นมีพอร์ตปุ่มกด <strong>BIOS Flashback</strong> ด้านหลังเคส เพื่อช่วยให้ช่างเสียบแฟลชไดรฟ์ที่ผ่านการเปลี่ยนชื่อไฟล์เฉพาะตามเงื่อนไขลงพอร์ต และกดปุ่มอัปเดตไบออสได้ตรงโดยไม่ต้องสวม CPU, แรม หรือการ์ดจอ เหมาะสำหรับการชุบชีวิตเครื่องบอร์ดที่ไบออสพังเสียหาย</p>
            </div>

            <img src="images/biosup.png" alt="biosupdate" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    }
];