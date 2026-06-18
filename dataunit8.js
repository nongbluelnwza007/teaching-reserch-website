window.courseContentUnit8 = [
    {
        title: "8.1 การตรวจสอบและรายงานผลการทดสอบ",
        content: `
            <h1>8.1 การตรวจสอบและรายงานผลการทดสอบ (Comprehensive Stress Testing)</h1>
            <p>เมื่อประกอบเครื่องหรือเปลี่ยนอุปกรณ์หลักเสร็จสิ้น ช่างเทคนิคระดับมืออาชีพจะดำเนินกระบวนการทดสอบเสถียรภาพภายใต้สภาวะโหลดสูงสุด (Stress Testing) เพื่อหาจุดบกพร่องและวิเคราะห์รายงานอย่างเป็นระบบ ดังนี้:</p>
            
            <div class="callout-box">
                <h3>1. ซอฟต์แวร์มาตรฐานสำหรับการทดสอบโหด (Diagnostic &amp; Stress Test Tools)</h3>
                <ul>
                    <li><strong>Prime95:</strong> เน้นสร้างโหลดคำนวณทางคณิตศาสตร์ระดับทศนิยมแบบทับซ้อนขั้นสูงสุดลงบนคอร์ประมวลผล CPU และตรวจสอบการประมวลผลผิดพลาดของรีจิสเตอร์หลัก หากตรวจเจอค่าผิดพลาด (Error) แม้แต่นิดเดียว แสดงว่า CPU/RAM ขาดเสถียรภาพ หรือโวลต์ไฟเลี้ยงต่ำไป</li>
                    <li><strong>FurMark:</strong> สร้างรูปกราฟิกเรนเดอร์ 3D แบบซับซ้อนอย่างต่อเนื่องเพื่อโหลดการทำงานของ GPU และระบบควบคุมกำลังไฟของการ์ดจอ เพื่อดูค่าขีดจำกัดความร้อนสูงสุดและความนิ่งการหมุนพัดลม</li>
                    <li><strong>MemTest86:</strong> เครื่องมือบูตแยกภายนอกระบบปฏิบัติการ เพื่อรันเขียนและอ่านค่าแพทเทิร์นข้อมูลลงบนเซลล์แรมระบบทั้งหมด เพื่อวินิจฉัยตรวจสอบหาชิ้นส่วนแรมที่เสียหรือจุดลัดวงจรเฉพาะเซลล์</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. การวิเคราะห์ค่าแรงดันไฟฟ้าและความร้อนขณะทดสอบ (System Stability Limits)</h3>
                <ul>
                    <li><strong>การคุมความร้อน CPU:</strong> ติดตามค่าอุณหภูมิคอร์ผ่าน HWMonitor หากความร้อนพุ่งแตะขีดจำกัดสูงสุดและเกิด <strong>Thermal Throttling</strong> (ความถี่ Clock ดิ่งตก) แสดงว่า Heatsink หลวม ซิลิโคนแห้ง หรือแผ่นลอกใต้ซิงค์ไม่ได้แกะออก</li>
                    <li><strong>เสถียรภาพแรงดันไฟของพาวเวอร์ซัพพลาย (PSU Voltage Rails Check):</strong> ตามข้อกำหนดมาตรฐาน ATX Power Supply ค่าแรงดันไฟหลักในราง +12V, +5V และ +3.3V <strong>ยอมให้เกิดการเบี่ยงเบนได้ไม่เกิน &plusmn;5%</strong> ขณะกำลังโหลดทดสอบหนัก ดังตารางขีดจำกัดความปลอดภัยนี้:
                        <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9em;">
                            <thead>
                                <tr>
                                    <th style="padding:6px; text-align:center;">รางไฟฟ้า</th>
                                    <th style="padding:6px; text-align:center;">แรงดันไฟฟ้าต่ำสุด</th>
                                    <th style="padding:6px; text-align:center;">ค่าแรงดันมาตรฐาน</th>
                                    <th style="padding:6px; text-align:center;">แรงดันไฟฟ้าสูงสุด</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding:6px; text-align:center; font-weight:bold;">+12V Rail</td>
                                    <td style="padding:6px; text-align:center; color:#f87171;">11.40 V</td>
                                    <td style="padding:6px; text-align:center;">12.00 V</td>
                                    <td style="padding:6px; text-align:center; color:#f87171;">12.60 V</td>
                                </tr>
                                <tr>
                                    <td style="padding:6px; text-align:center; font-weight:bold;">+5V Rail</td>
                                    <td style="padding:6px; text-align:center; color:#f87171;">4.75 V</td>
                                    <td style="padding:6px; text-align:center;">5.00 V</td>
                                    <td style="padding:6px; text-align:center; color:#f87171;">5.25 V</td>
                                </tr>
                                <tr>
                                    <td style="padding:6px; text-align:center; font-weight:bold;">+3.3V Rail</td>
                                    <td style="padding:6px; text-align:center; color:#f87171;">3.14 V</td>
                                    <td style="padding:6px; text-align:center;">3.30 V</td>
                                    <td style="padding:6px; text-align:center; color:#f87171;">3.47 V</td>
                                </tr>
                            </tbody>
                        </table>
                        หากโปรแกรมแสดงค่าแรงดันดิบ เช่น ราง 12V ตกลงไปต่ำกว่า 11.4V แสดงว่าพาวเวอร์ซัพพลายเสื่อมหรือจ่ายพลังงานกระแสไฟฟ้าได้ไม่เพียงพอ เสี่ยงต่อการเกิดเครื่องดับค้าง
                    </li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>3. การวิเคราะห์สุขภาพสื่อบันทึกข้อมูล (S.M.A.R.T Attributes Analysis)</h3>
                <p>โปรแกรมตรวจสุขภาพดิสก์ (เช่น CrystalDiskInfo) จะรายงานค่าสถิติเชิงลึก ช่างเทคนิคต้องสังเกตดัชนีชี้วัดความเสี่ยงสำคัญ 3 ตัวหลักดังนี้:</p>
                <ul>
                    <li><strong>05 - Reallocated Sectors Count (จำนวนเซกเตอร์ที่จัดสรรใหม่):</strong> บ่งชี้จำนวนเซกเตอร์ที่เสียหายแบบถาวรบนหน้าจานแม่เหล็ก (Bad Sector) หรือบล็อกชิป SSD ที่ชำรุด โดยตัวควบคุมดิสก์ได้สำรองย้ายที่อยู่ข้อมูลไปไว้ยังพื้นที่สำรองแล้ว <strong>ค่านี้ต้องเป็น 0 เสมอ</strong> หากเริ่มมีตัวเลขขึ้น และมีแนวโน้มเพิ่มขึ้นทุกสัปดาห์ แสดงว่าดิสก์กำลังทยอยชำรุดเสียหาย ช่างต้องรีบย้ายข้อมูลด่วน</li>
                    <li><strong>C5 - Current Pending Sector Count (จำนวนเซกเตอร์รอนำกลับมาประเมินใหม่):</strong> เซกเตอร์ที่เขียนอ่านไฟล์ล้มเหลวชั่วคราวและกำลังรอระบบอ่านซ้ำเพื่อกู้คืน หากกู้ไม่ได้จะถูกโคลนย้ายไปเป็นเซกเตอร์ที่จัดสรรใหม่ (Bad Sector ถาวร)</li>
                    <li><strong>TBW (Total Bytes Written):</strong> ปริมาณข้อมูลทั้งหมดที่ถูกบันทึกลงบนตัว SSD ตลอดอายุการทำงาน ใช้สำหรับตรวจสอบระยะเวลารับประกันที่เหลือเมื่อนำไปเทียบกับสเปกค่าเคลมจากโรงงานผู้ผลิต</li>
                </ul>
            </div>
            
            <img src="images/cpu_temp.png" alt="cputemp" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "8.2 การจัดการพาร์ทิชันระดับล่าง",
        content: `
            <h1>8.2 การจัดการพาร์ทิชันระดับล่าง (Advanced Disk Partitioning)</h1>
            <p>การจัดการจัดสรรเนื้อที่พาร์ทิชันจำเป็นต้องเข้าใจโครงสร้างระบบการจัดเก็บระดับกายภาพของข้อมูล:</p>
            
            <div class="callout-box">
                <h3>1. การเปรียบเทียบเชิงลึก MBR vs GPT</h3>
                <ul>
                    <li><strong>MBR (Master Boot Record):</strong> โครงสร้างแบบเก่า ขนาดบูตเซกเตอร์ 512 ไบต์แรกที่อยู่ต้นไดรฟ์ เก็บตารางจัดตำแหน่งดิสก์ (Partition Table) ข้อจำกัดคือรองรับขนาดพาร์ทิชันได้ไม่เกิน 2.2 TB และสร้างพาร์ทิชันระบบหลักได้สูงสุด 4 ตัวเท่านั้น</li>
                    <li><strong>GPT (GUID Partition Table):</strong> โครงสร้างมาตรฐานระบบ UEFI ปิดช่องโหว่การจำกัดพาร์ทิชันโดยรองรับพาร์ทิชันระบบย่อยได้สูงสุดถึง 128 ตัว รองรับขนาดเนื้อดิสก์ได้สูงระดับ Zettabytes และมีความปลอดภัยเหนือกว่าโดยระบบจะเก็บไฟล์ตารางพาร์ทิชันสำรองไว้ที่ส่วนท้ายสุดของไดรฟ์เพื่อคัดลอกกู้คืนอัตโนมัติหากส่วนหัวเสียหาย</li>
                </ul>
            </div>

            <div class="callout-box">
                <h3>2. ความสำคัญของระบบจัดทิศทางเซกเตอร์แรม (4K Partition Alignment)</h3>
                <p>ไดรฟ์ SSD และฮาร์ดดิสก์ระบบ Advanced Format (AF) สมัยใหม่ มีขนาดบล็อกเก็บข้อมูลกายภาพที่ 4,096 ไบต์ (4KB) ต่อบล็อก หากพาร์ทิชันแรกเริ่มที่ตำแหน่งจุดเริ่มต้นที่ไม่ตรงบล็อก (Unaligned Partition) เช่น ข้ามไปเริ่มที่ 31KB แรกตามรูปแบบ OS เก่า</p>
                <p>จะส่งผลให้เวลาวินโดว์สั่งเขียนไฟล์ 4KB ระบบจะต้องสั่งเขียนคาบเกี่ยวข้ามบล็อกลงไปยังสองบล็อกเก็บข้อมูลทางกายภาพ (ทำให้ต้องทำงานหนักเพิ่มขึ้น 2 เท่าตลอดเวลา) <strong>ส่งผลให้ความเร็วอ่านเขียนของ SSD ตกลงไปกว่า 50% และทำให้ชิปทนทานต่ำลงและหมดอายุเร็วขึ้น</strong></p>
                <p><em>แนวทางการแก้ไข:</em> ระบบ Windows ยุคปัจจุบันจะจัดการย้ายพาร์ทิชันแรกไปตั้งหลักที่ตำแหน่ง offset 1,048,576 ไบต์ (1MB หรือสอดคล้องกับพินเซกเตอร์ที่ 2048) โดยอัตโนมัติเพื่อรับส่งไฟล์ได้ตรงบล็อกพอดี</p>
            </div>
            
            <img src="images/disk.png" alt="disk" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    },
    {
        title: "8.3 การโคลนฮาร์ดดิสก์และการย้ายระบบ",
        content: `
            <h1>8.3 การโคลนดิสก์และการซ่อมแซมจุดบูตเสียหาย (System Migration &amp; Boot Repair)</h1>
            <p>เพื่ออัปเกรดดิสก์เก่าเปลี่ยนเป็นตัวใหม่หรือทำการย้ายระบบปฏิบัติการทั้งหมดโดยไม่ต้องล้างติดตั้งโปรแกรมใหม่:</p>

            <div class="callout-box">
                <h3>1. วิธีการจำลองโคลนข้อมูล (Cloning Methods)</h3>
                <ul>
                    <li><strong>Intelligent Sector Copy (โคลนอัจฉริยะ):</strong> คัดลอกเฉพาะข้อมูลชิ้นส่วนที่มีการจัดบันทึกจริงข้ามไป และปรับขนาดพาร์ทิชันของปลายทางให้พอดีสมดุลกับพื้นที่ดิสก์ใหม่ ทำงานได้เร็วและยืดหยุ่นสูง</li>
                    <li><strong>Sector-by-Sector Copy (โคลนดิสก์ทุกบิต):</strong> คัดลอกทุกบิตข้อมูลทั้งหมด รวมถึงช่องว่างที่ยังไม่ใช้งานและเซกเตอร์เสีย ประโยชน์คือช่วยกู้ข้อมูลในการทดสอบนิติวิทยาศาสตร์คอมพิวเตอร์ (Computer Forensics) ปลายทางดิสก์ต้องมีขนาดความจุเท่ากันหรือใหญ่กว่าต้นทางเท่านั้น</li>
                </ul>
            </div>

            <div class="callout-box box-danger">
                <h3>2. การซ่อมแซมลำดับบูตเสียหาย (Boot Sector Recovery)</h3>
                <p>หากระบบขึ้นฟ้อง Error หน้าจอดำระบุ <em>"Bootmgr is missing"</em> หรือรหัสจอฟ้า <em>0xc000000e</em> ช่างเทคนิคสามารถใช้ Windows RE บูตผ่าน Command Prompt และป้อนสืบค้นชุดคำสั่งกู้คืนไฟล์บูตและ BCD ดังนี้:</p>
                <div class="code-block">bootrec /fixmbr [สร้างตาราง MBR บูตหลัก]
bootrec /fixboot [สร้างพาร์ทิชันบูตสำหรับระบบ]
bootrec /rebuildbcd [สแกนไดรฟ์ทั้งหมดหาไฟล์ Windows เพื่อสร้างฐานข้อมูล BCD บูตขึ้นมาใหม่]</div>
            </div>

            <div class="callout-box">
                <h3>3. การทำลายข้อมูลอย่างสมบูรณ์แบบถาวร (Secure Erase vs Overwrite)</h3>
                <p>หากต้องการสละทิ้งดิสก์เก่าอย่างปลอดภัยและไม่หลงเหลือข้อมูลความลับ ช่างไม่ควรใช้วิธีฟอร์แมตทั่วไปซึ่งกู้ได้ง่าย:</p>
                <ul>
                    <li><strong>SSD Secure Erase:</strong> เป็นฟังก์ชันที่สั่งงานผ่านโปรแกรมของผู้ผลิตชิป SSD สั่งส่งกระแสไฟฟ้าแรงดันบวกกระแทกล้างเซลล์หน่วยความจำทั้งหมดให้กลับเป็นสถานะว่างเปล่าพร้อมกันรวดเดียว (ล้างชิปหมดจด ไม่ลดอายุการใช้งานเหมือนวิธีเขียนทับ)</li>
                    <li><strong>Hard Drive Overwriting (Write Zeroes):</strong> เขียนข้อมูล 0 ทับลงในทุกเซกเตอร์ของจานแม่เหล็ก เพื่อกลบประจุไฟฟ้าเดิม ป้องกันซอฟต์แวร์กู้ภาพข้อมูลเดิมกลับมา</li>
                </ul>
            </div>

            <img src="images/clone.png" alt="clone" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 30px rgba(0,0,0,0.4);">
        `
    }
];