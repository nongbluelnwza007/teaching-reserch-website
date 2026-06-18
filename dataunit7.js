window.courseContentUnit7 = [
    {
        title: "7.1 ซอฟต์แวร์ใช้งาน (Application Software)",
        content: `
            <h1>7.1 ประเภทและการจำแนกประเภทซอฟต์แวร์ (Software Classification)</h1>
            <p>ซอฟต์แวร์คือชุดคำสั่งที่เขียนขึ้นเพื่อควบคุมฮาร์ดแวร์และประมวลผลงานตามที่ต้องการ เชิงระบบคอมพิวเตอร์แบ่งประเภทซอฟต์แวร์ออกเป็น 4 ระดับหลักดังนี้:</p>
            
            <table style="width:100%; border-collapse:collapse; margin:15px 0;">
                <thead>
                    <tr>
                        <th style="padding:8px; text-align:left; width:20%;">ประเภทซอฟต์แวร์</th>
                        <th style="padding:8px; text-align:left; width:45%;">หน้าที่และขอบเขตการทำงาน</th>
                        <th style="padding:8px; text-align:left; width:35%;">ตัวอย่างในชีวิตจริง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:8px; font-weight:bold;">1. ซอฟต์แวร์ระบบ (System Software)</td>
                        <td style="padding:8px;">แกนหลักในการควบคุมฮาร์ดแวร์ จัดสรรแรม จัดการไฟล์ และเตรียมแพลตฟอร์มให้แอปพลิเคชันตัวอื่นรันทำงาน</td>
                        <td style="padding:8px;">Windows, Linux, macOS, iOS, Android และ Device Drivers</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; font-weight:bold;">2. ซอฟต์แวร์ประยุกต์ (Application Software)</td>
                        <td style="padding:8px;">โปรแกรมสร้างสรรค์สำหรับผู้ใช้ปลายทาง เพื่อบรรลุเป้าหมายการทำงานหรือสร้างความบันเทิงเฉพาะด้าน</td>
                        <td style="padding:8px;">Google Chrome, Adobe Photoshop, Microsoft Word, Blender, Steam</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; font-weight:bold;">3. ซอฟต์แวร์อรรถประโยชน์ (Utility Software)</td>
                        <td style="padding:8px;">โปรแกรมบำรุงรักษา เพิ่มประสิทธิภาพ ปรับแต่ง ป้องกัน และซ่อมแซมจุดบกพร่องของระบบคอมพิวเตอร์</td>
                        <td style="padding:8px;">Disk Defragmenter, WinRAR, CrystalDiskInfo, Windows Defender</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; font-weight:bold;">4. รันไทม์และมิดเดิลแวร์ (Runtime / Middleware)</td>
                        <td style="padding:8px;">ซอฟต์แวร์ตัวกลางที่จัดตั้งสภาพแวดล้อมเฉพาะที่โปรแกรมระดับสูงพัฒนาขึ้นต้องการเพื่อประมวลผลคำสั่ง</td>
                        <td style="padding:8px;">.NET Framework, Java Runtime Environment (JRE), DirectX API</td>
                    </tr>
                </tbody>
            </table>

            <img src="images/appli.png" alt="app" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "7.2 การติดตั้งโปรแกรม Microsoft Office",
        content: `
            <h1>7.2 รูปแบบและสถาปัตยกรรมติดตั้ง Microsoft Office</h1>
            <p>ชุดโปรแกรมสำนักงาน Microsoft Office มีโครงสร้างการจัดระบบส่งไฟล์ติดตั้งและการเปิดสิทธิ์ใช้งานระบบ (Licensing) สองกลุ่มหลักดังนี้:</p>

            <div class="callout-box">
                <h3>1. รูปแบบการจัดส่งไฟล์และติดตั้ง (Deployment Models)</h3>
                <ul>
                    <li><strong>การติดตั้งผ่าน MSI-based Windows Installer (แบบดั้งเดิม):</strong> เป็นการติดตั้งแบบโลคัลออฟไลน์ผ่านไฟล์ ISO/DVD ขนาดใหญ่ ตัวไฟล์ระบบจะถูกดึงเข้าติดตั้งลงดิสก์รวดเดียวทั้งหมด และการอัปเดตจะต้องทำเป็นแพตช์ขนาดใหญ่ (Service Packs)</li>
                    <li><strong>การติดตั้งแบบคลิกเพื่อรัน (Click-to-Run - C2R):</strong> สถาปัตยกรรมคลาวด์เนทีฟที่ Microsoft ใช้ปัจจุบันในการติดตั้ง Microsoft 365 ตัวติดตั้งจะใช้วิธีสตรีมดาวน์โหลดไฟล์ติดตั้งที่จำลองเสมือนเฉพาะส่วนที่จำเป็นมาก่อน ทำให้ผู้ใช้เปิดใช้งานแอปพลิเคชันได้ทันทีตั้งแต่การดาวน์โหลดยังไม่ครบ 100% มีข้อดีคือการปรับปรุงแพตช์ความปลอดภัยเบื้องหลังจะอัปเดตอัตโนมัติเป็นชิ้นส่วนย่อยๆ ส่งผลให้ลด Overhead ของระบบและประหยัดพื้นที่ดิสก์</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. กลไกการเปิดสิทธิ์การใช้งานลิขสิทธิ์ (License Activation)</h3>
                <ul>
                    <li><strong>KMS (Key Management Service):</strong> ระบบเปิดใช้ลิขสิทธิ์องค์กรขนาดใหญ่ โดยเครื่องลูกข่ายจะวิ่งเข้าไปยืนยันสิทธิ์กับเครื่องแม่ข่ายโลคัลเซิร์ฟเวอร์หลักของหน่วยงานเพื่ออัปเดตสิทธิ์ทุกๆ 180 วัน</li>
                    <li><strong>MAK (Multiple Activation Key):</strong> การใส่คีย์สิทธิ์หนึ่งชุดที่ได้รับโควตาจำนวนเครื่องยืนยันสิทธิ์โดยตรงกับ Microsoft เซิร์ฟเวอร์ทางออนไลน์</li>
                    <li><strong>Cloud Identity Subscription:</strong> ยืนยันสิทธิ์ความคุ้มครองรายบุคคลผ่านการล็อกอินด้วยอีเมลสมาชิก Microsoft 365</li>
                </ul>
            </div>

            <img src="images/office.png" alt="office" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "7.3 การติดตั้งโปรแกรมใช้งานทั่วไป",
        content: `
            <h1>7.3 กลยุทธ์การติดตั้งซอฟต์แวร์ทั่วไปอย่างปลอดภัย</h1>
            <p>เพื่อปกป้องระบบคอมพิวเตอร์จากโปรแกรมไม่พึงประสงค์และการติดตั้งแอปพลิเคชันล้มเหลว ช่างเทคนิคควรปฏิบัติตามคู่มือนี้:</p>

            <div class="callout-box">
                <h3>เช็คลิสต์ตรวจความปลอดภัยก่อนกดติดตั้ง (Pre-installation Audit)</h3>
                <ol>
                    <li><strong>การตรวจสอบความสมบูรณ์และแฮชไฟล์ (Checksum Verification):</strong> ตรวจรหัสค่าแฮช SHA-256 ของตัวไฟล์ที่ดาวน์โหลดมาเทียบกับรหัสแท้บนหน้าเว็บไซต์ของผู้พัฒนา เพื่อยืนยันว่าไฟล์นั้นไม่ได้ถูกสอดแทรกมัลแวร์ระหว่างทาง</li>
                    <li><strong>เลือกรูปแบบติดตั้งกำหนดเอง (Custom / Advanced Installation):</strong> ห้ามกดเลือก Express หรือ Standard Installation เด็ดขาด เนื่องจากผู้สร้างโปรแกรมมักสอดแทรกซอฟต์แวร์พ่วงที่ไม่พึงประสงค์ (Bloatware, Adware, Browser Toolbar) เข้ามา ช่างต้องเลือก Custom เพื่อยกเลิกการเลือกขีดถูก (Uncheck) รายการติดตั้งพ่วงออก</li>
                    <li><strong>การลงชื่อกำกับดิจิทัล (Digital Signature):</strong> สังเกตหน้าต่างเตือน UAC (User Account Control) ว่าแถบสีและชื่อผู้พัฒนา (Verified Publisher) ถูกต้อง ไม่ใช่ผู้พัฒนาที่ไม่รู้จัก (Unknown Publisher)</li>
                </ol>
            </div>

            <img src="images/adobe.png" alt="adobe" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "7.4 การถอนโปรแกรม (Uninstallation)",
        content: `
            <h1>7.4 การลบโปรแกรมที่สะอาดและการถอนการติดตั้งเชิงลึก</h1>
            <p>การกดถอนติดตั้งทั่วไปผ่าน Control Panel อาจหลงเหลือประวัติขยะ (Remnants) ซึ่งเป็นตัวการทำให้รีจิสทรีบวมและเสียเนื้อที่ดิสก์ ช่างเทคนิคควรใช้วิธีสะสางข้อมูลดังนี้:</p>

            <div class="callout-box">
                <h3>ขั้นตอนการถอนรากถอนโคนโปรแกรมตกค้าง</h3>
                <ol>
                    <li>ดำเนินการถอนโปรแกรมผ่านเมนูหลัก <strong>Add or Remove Programs</strong> ของ Windows ก่อนเพื่อให้โปรแกรม Uninstaller ประจำเครื่องลบตัวเอง</li>
                    <li>เข้าไปตรวจหาแฟ้มโฟลเดอร์ของแอปพลิเคชันนั้นที่ไม่ได้ถูกลบในไดเรกทอรีสำคัญ 3 แฟ้ม ได้แก่:
                        <ul>
                            <li><code>C:\\Program Files</code> และ <code>C:\\Program Files (x86)</code></li>
                            <li><code>C:\\Users\\[ชื่อผู้ใช้]\\AppData\\Local</code></li>
                            <li><code>C:\\Users\\[ชื่อผู้ใช้]\\AppData\\Roaming</code></li>
                        </ul>
                    </li>
                    <li>ใช้แอปพลิเคชันตรวจสอบสารสนเทศรีจิสทรีเพื่อลบการตั้งค่าคีย์ที่ค้างอยู่ หรือใช้เครื่องมือช่วยลบระดับสูง เช่น Revo Uninstaller ซึ่งจะสแกนโครงสร้าง Registry Tree เพื่อลบค่า Orphaned Keys ที่หลงเหลือทั้งหมดให้ระบบสะอาด</li>
                </ol>
            </div>

            <img src="images/uninstall.png" alt="uninstall" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "7.5 การติดตั้งโปรแกรมควบคุมอุปกรณ์ (Device Driver)",
        content: `
            <h1>7.5 สถาปัตยกรรมไดรเวอร์ และการแก้ไขวิเคราะห์อุปกรณ์ขัดข้อง</h1>
            <p>ไดรเวอร์ทำหน้าที่แปลงคำสั่งเรียกระบบจากตัว Kernel ส่งตรงเข้าสู่อุปกรณ์ฮาร์ดแวร์ โดยการทำงานแบ่งระดับสิทธิ์เป็นสองโหมดหลัก:</p>

            <div class="callout-box">
                <h3>1. ระดับโหมดการทำงานของไดรเวอร์ (Driver Execution Modes)</h3>
                <ul>
                    <li><strong>Kernel Mode Driver Framework (KMDF):</strong> ไดรเวอร์ที่รันในสิทธิ์ระดับสูง Ring 0 มีผลอย่างยิ่งต่อการควบคุมฮาร์ดแวร์หลัก (เช่น ไดรเวอร์การ์ดจอ, ไดรเวอร์บัสเมนบอร์ด) หากไดรเวอร์ระดับนี้เกิดความเสียหายหรือเขียนโค้ดผิดพลาด จะลากระบบปฏิบัติการหลักค้างและขึ้นจอฟ้า BSOD ทันที</li>
                    <li><strong>User Mode Driver Framework (UMDF):</strong> ไดรเวอร์ที่ทำงานในพื้นที่ระนาบ Ring 3 (เช่น ไดรเวอร์พอร์ต USB ทั่วไป, ปรินเตอร์, เมาส์) หากเกิดการค้าง เสียหายขึ้นมา จะจำกัดอยู่เฉพาะตัวไดรเวอร์พอร์ตอุปกรณ์นั้นๆ ที่จะรีสตาร์ททำงานใหม่โดยไม่ทำให้ระบบ Windows หลักดับค้างพังไปด้วย</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. การแปลและวิเคราะห์อาการรหัสบกพร่อง (Device Manager Error Codes)</h3>
                <p>เมื่ออุปกรณ์หยุดทำงาน ช่างจะเข้าไปวิเคราะห์ในหน้า Device Manager และตรวจรหัสผิดพลาดหลักดังนี้:</p>
                <ul>
                    <li><strong>Code 10 (Device cannot start):</strong> อุปกรณ์ไม่สามารถเริ่มทำงานได้ มักเกิดจากไดรเวอร์ไม่ตรงรุ่น หรือตัวชิ้นส่วนฮาร์ดแวร์หลวมไม่ได้เสียบเชื่อมต่อพลังงานไฟฟ้าเพียงพอ</li>
                    <li><strong>Code 43 (Device reported problems):</strong> อุปกรณ์รายงานปัญหาขัดข้องชำรุดเสียหาย มักชี้พิกัดว่าตัวฮาร์ดแวร์นั้นๆ อาจเริ่มชำรุดทางกายภาพ หรือเฟิร์มแวร์อุปกรณ์เสริมมีปัญหาหนักลัดวงจร</li>
                </ul>
            </div>

            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 25px auto; max-width: 800px;">
                <img src="images/driver1.png" style="width: 48%; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.4);">
                <img src="images/driver2.png" style="width: 48%; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.4);">
            </div>
        `
    },
    {
        title: "7.6 การสำรองและจัดการไดรเวอร์ (Driver Backup)",
        content: `
            <h1>7.6 การสำรองระบบไดรเวอร์ และเครื่องมือ PowerShell</h1>
            <p>ก่อนดำเนินการล้างติดตั้งระบบปฏิบัติการใหม่ การรวบรวมสำรองไฟล์ไดรเวอร์เครื่องเดิมเก็บไว้จะช่วยประหยัดเวลาอย่างมหาศาล โดยเฉพาะไดรเวอร์เฉพาะทางของเครื่องแบรนด์รุ่นเก่าที่หาเว็บดาวน์โหลดไม่ได้แล้ว:</p>

            <div class="callout-box box-success">
                <h3>1. การใช้คำสั่งสำรองไดรเวอร์ทั้งหมดผ่าน PowerShell</h3>
                <p>เปิดโปรแกรม Windows PowerShell ในระดับสิทธิ์ผู้ดูแลระบบ (Run as Administrator) และป้อนชุดโค้ดสั่งระบบดึงไฟล์ไดรเวอร์แบรนด์บุคคลที่สาม (Third-party Drivers) ทั้งหมดที่ติดตั้งอยู่ในเครื่องออกมาเก็บเป็นโฟลเดอร์ปลายทาง:</p>
                <div class="code-block">Export-WindowsDriver -Online -Destination D:\DriverBackup</div>
                <p>คำสั่งนี้จะสแกนดึงไฟล์นามสกุล <code>.inf</code>, <code>.sys</code> และโครงสร้างติดตั้งของอุปกรณ์เสริมมาเก็บไว้ที่ไดรฟ์ D: ทั้งหมดอย่างปลอดภัย</p>
            </div>

            <div class="callout-box">
                <h3>2. การเรียกคืนและติดตั้งไดรเวอร์ที่สำรองไว้ (Driver Restore)</h3>
                <p>เมื่อลง Windows ใหม่เสร็จแล้ว หากมีชิ้นส่วนที่ยังตรวจไม่พบ ช่างเทคนิคสามารถสั่งติดตั้งไดรเวอร์ทั้งหมดที่ก๊อปปี้ไว้กลับคืนเข้ามาได้ผ่าน PowerShell โดยตรง:</p>
                <div class="code-block">pnputil /add-driver D:\DriverBackup\*.inf /subdirs /install</div>
                <p>คำสั่งนี้จะวนรันสืบค้นและสั่งติดตั้งไฟล์ INF ไดรเวอร์ที่สัมพันธ์กับชิ้นส่วนอุปกรณ์ในเครื่องให้กลับมาทำงานสมบูรณ์อัตโนมัติ</p>
            </div>

            <img src="images/backup.png" alt="backup" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    }
];