window.courseContentUnit2 = [
    { 
        title: "2.1 อุปกรณ์ภายใน (Internal Components)", 
        content: `
            <h2>2.1 อุปกรณ์ภายในตัวเครื่อง (Internal Components)</h2>
            <p>ส่วนประกอบภายในเคสทำหน้าที่เป็นระบบอวัยวะประสานงาน เพื่อขับเคลื่อนวงจรการประมวลผลและการจัดเก็บข้อมูลอย่างเป็นระบบ มีรายละเอียดเชิงลึกดังนี้:</p>
            
            <div class="detailed-card box-info">
                <h3>1. แหล่งจ่ายไฟ (Power Supply Unit - PSU)</h3>
                <p>ทำหน้าที่แปลงไฟฟ้ากระแสสลับ (AC 220V) จากระบบไฟบ้านให้เป็นไฟฟ้ากระแสตรง (DC) แรงดันต่ำหลายระดับเพื่อจ่ายให้อุปกรณ์ต่างๆ:</p>
                <ul>
                    <li><strong>ระดับแรงดันไฟเลี้ยง (DC Outputs):</strong> 
                        <ul>
                            <li><strong>+12V:</strong> จ่ายกระแสไฟหลักให้กับ CPU และการ์ดจอ (GPU) ซึ่งเป็นจุดดึงพลังงานสูงสุดในระบบ</li>
                            <li><strong>+5V / +3.3V:</strong> จ่ายไฟให้กับเมนบอร์ด, ชิปเซ็ต, พอร์ต USB และอุปกรณ์จัดเก็บข้อมูล (SSD/HDD)</li>
                            <li><strong>+5VSB (Standby):</strong> จ่ายกระแสไฟเลี้ยงระดับต่ำตลอดเวลาแม้ปิดเครื่อง เพื่อรอรับการสั่งเปิดเครื่อง (Power-on)</li>
                        </ul>
                    </li>
                    <li><strong>มาตรฐานประสิทธิภาพการแปลงไฟ (80 Plus Certification):</strong> วัดประสิทธิภาพพลังงานที่สูญเสียไปในรูปของความร้อนขณะจ่ายโหลด 20%, 50%, และ 100% มีลำดับชั้นคือ Standard > Bronze > Silver > Gold > Platinum > Titanium (ความสูญเสียต่ำสุด)</li>
                    <li><strong>ระบบจัดสรรพลังงาน (Rail Design):</strong> Single-rail (จ่ายไฟ 12V บนรางใหญ่สายเดียว รองรับไฟกระชากของการ์ดจอสูงๆ ได้ดี) และ Multi-rail (แยกการจ่ายไฟออกเป็นหลายราง มีวงจรตัดไฟเกินแยกจากกันเพื่อความปลอดภัยสูง)</li>
                </ul>
            </div>

            <img src="images/psu.png" alt="psu" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card box-success">
                <h3>2. หน่วยประมวลผลกลาง (CPU - Central Processing Unit)</h3>
                <p>หัวใจสำคัญในระบบประมวลผล ทำงานประมวลผลข้อมูลตามโครงสร้างหลักการสถาปัตยกรรมระดับไมโคร:</p>
                <ul>
                    <li><strong>โครงสร้างหน่วยความจำแคช (Cache Hierarchy):</strong> 
                        <ul>
                            <li><strong>L1 Cache:</strong> ความจุต่ำสุด (หลัก KB) แต่มีความเร็วในการเข้าถึงใกล้เคียงกับความเร็วคอร์ใน CPU เป็นของส่วนตัวในแต่ละคอร์</li>
                            <li><strong>L2 Cache:</strong> ความจุระดับปานกลาง (หลัก MB) ความเร็วช้ากว่า L1 แต่เร็วกว่า L3</li>
                            <li><strong>L3 Cache:</strong> ความจุสูงสุด (ระดับหลายสิบ MB) ทำงานร่วมกันและแชร์ข้อมูลระหว่างคอร์ทั้งหมดใน CPU</li>
                        </ul>
                    </li>
                    <li><strong>การควบคุมความร้อน (Thermal Design):</strong> ค่า <strong>TDP (Thermal Design Power)</strong> คืออัตราการระบายความร้อนที่ตัวระบายความร้อนต้องรองรับได้ หากระบบไม่สามารถระบายความร้อนได้ทัน อุณหภูมิจะพุ่งไปถึงขีดจำกัด (TJMax หรือ Thermal Junction Maximum ซึ่งมักอยู่ที่ 95-100°C) ส่งผลให้เกิดระบบป้องกันตัวเองลดความถี่สัญญาณนาฬิกาลง หรือเรียกว่า <strong>Thermal Throttling</strong> เพื่อลดอุณหภูมิ ป้องกันชิปพังเสียหาย</li>
                </ul>
            </div>

            <img src="images/cpu.png" alt="cpu" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card box-warning">
                <h3>3. หน่วยความจำหลัก (RAM - Random Access Memory)</h3>
                <p>หน่วยความจำชั่วคราวความเร็วสูงประเภท Dynamic RAM (DRAM) ที่ทำงานโดยอาศัยตัวเก็บประจุ (Capacitors) ที่ต้องประจุไฟฟ้ากระตุ้นตลอดเวลา (Refresh Cycles)</p>
                <ul>
                    <li><strong>ความแตกต่างระหว่าง DDR4 และ DDR5:</strong>
                        <ul>
                            <li><strong>DDR4:</strong> ใช้ไฟเลี้ยง 1.2V มีระบบการจัดการพลังงานอยู่บนเมนบอร์ด ความถี่สัญญาณมาตรฐานช่วง 2133 - 3200 MT/s</li>
                            <li><strong>DDR5:</strong> ใช้ไฟเลี้ยงลดลงเหลือ 1.1V ตัวจัดการพลังงานย้ายไปอยู่บนแผงแรม (PMIC - Power Management Integrated Circuit) ทำให้อัตราป้อนไฟนิ่งขึ้น มีระบบตรวจสอบข้อผิดพลาดในชิปเอง (On-die ECC) ความเร็วเริ่มตั้งแต่ 4800 MT/s ขึ้นไป</li>
                        </ul>
                    </li>
                    <li><strong>ระยะเวลาหน่วงคำสั่ง (CAS Latency - CL):</strong> ระยะเวลาที่สล็อตแรมต้องรอคอยข้อมูลหลังจากได้รับคำสั่งการระบุตำแหน่ง ค่า CL ยิ่งน้อยยิ่งเข้าถึงข้อมูลคำสั่งแรกได้เร็ว</li>
                </ul>
            </div>

            <img src="images/ram.png" alt="ram" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card box-danger">
                <h3>4. อุปกรณ์จัดเก็บข้อมูล (Storage Devices)</h3>
                <p>ระบบจัดเก็บข้อมูลแบบถาวร ไม่สูญหายเมื่อไม่มีกระแสไฟเลี้ยง (Non-Volatile Memory)</p>
                <ul>
                    <li><strong>Hard Disk Drive (HDD):</strong> ใช้จานแม่เหล็กหมุน (Spindle Platters) ข้อมูลอ่านผ่านหัวอ่านกลไก (Actuator Arm) มีข้อจำกัดด้านความเร็วเนื่องจากการขับเคลื่อนชิ้นส่วนกลไก (มักมีความเร็วอ่านเขียน 100-200 MB/s) และเสี่ยงต่อการชำรุดเสียหายหากเกิดแรงกระแทกเชิงฟิสิกส์</li>
                    <li><strong>Solid State Drive (SSD):</strong> ใช้ชิปความจำสารกึ่งตัวนำ NAND Flash (แบบ SLC, MLC, TLC, QLC) ทำงานร่วมกับชิปควบคุม (Controller) ไม่มีส่วนเคลื่อนไหวเชิงกล</li>
                    <li><strong>อินเตอร์เฟซและโปรโตคอล:</strong>
                        <ul>
                            <li><strong>SATA III:</strong> วิ่งผ่านสายส่งข้อมูลเดิม จำกัดแบนด์วิดท์สูงสุดที่ 600 MB/s</li>
                            <li><strong>PCIe NVMe (Non-Volatile Memory Express):</strong> วิ่งผ่านช่องสัญญาณบัส PCIe ความเร็วสูงมาก (Gen 3 = ~3500 MB/s, Gen 4 = ~7500 MB/s, Gen 5 = ~14000 MB/s)</li>
                            <li><strong>DRAM Cache:</strong> SSD ที่มีชิปแรมสำรองบนการ์ดจะเขียนไฟล์ย่อยได้เร็วและทนทานกว่ารุ่นประหยัดที่ไม่มีแคชแรม (DRAM-less) ซึ่งต้องพึ่งพาแรมของระบบเครื่องแทน (HMB - Host Memory Buffer)</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <img src="images/ssd.png" alt="ssd" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card" style="border-left:5px solid #8b5cf6; background:rgba(139,92,246,0.06);">
                <h3 style="color:#a78bfa;">5. การ์ดแสดงผล (GPU - Graphics Processing Unit)</h3>
                <p>หน่วยประมวลผลพิเศษที่ถูกออกแบบสถาปัตยกรรมแบบประมวลผลข้อมูลขนานจำนวนมากพร้อมกัน (Highly Parallel Architecture)</p>
                <ul>
                    <li><strong>โครงสร้างการประมวลผล:</strong> ประกอบด้วยคอร์ประมวลผลขนาดเล็กจำนวนหลายพันคอร์ (เช่น CUDA Cores ในการ์ดค่าย NVIDIA หรือ Stream Processors ค่าย AMD) เหมาะกับงานจำลองภาพกราฟิก 3D การเรนเดอร์ และการคำนวณโครงข่ายประสาทเทียมระดับลึก (Deep Learning AI)</li>
                    <li><strong>หน่วยความจำเฉพาะ (VRAM):</strong> ใช้หน่วยความจำความเร็วและขนาดแบนด์วิดท์มหาศาล เช่น GDDR6 หรือ HBM (High Bandwidth Memory) เพื่อส่งผ่านพิกเซลภาพความละเอียดสูงในเวลาเสี้ยววินาที</li>
                </ul>
            </div>

            <img src="images/gpu.png" alt="gpu" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">
        ` 
    },
    { 
        title: "2.2 อุปกรณ์บนแผ่นเมนบอร์ด", 
        content: `
            <h2>2.2 อุปกรณ์บนแผ่นเมนบอร์ด (Motherboard Components)</h2>
            <p>เมนบอร์ด (Mainboard/Motherboard) เป็นศูนย์กลางการสื่อสารและเชื่อมสายสัญญาณพลังงานไฟฟ้าของอุปกรณ์คอมพิวเตอร์ทั้งหมด รายละเอียดชิ้นส่วนสำคัญบนแผงวงจรมีดังนี้:</p>

            <div class="detailed-card box-info">
                <h3>1. ชิปเซ็ตควบคุมหลัก (Chipset / Platform Controller Hub - PCH)</h3>
                <p>ในอดีตแบ่งเป็น <strong>Northbridge</strong> (คุมความเร็วสูง: CPU, RAM, GPU) และ <strong>Southbridge</strong> (คุมความเร็วต่ำ: พอร์ต SATA, USB, PCI Slot) ปัจจุบัน ยุบรวม Northbridge เข้าไปในตัว CPU โดยตรง เหลือเพียงชิปเดี่ยวบนบอร์ดเรียกว่า <strong>PCH (Platform Controller Hub)</strong> เพื่อควบคุมสล็อตบัสที่เหลือ</p>
                <p>ชิปเซ็ตแบ่งตามความสามารถการโอเวอร์คล็อกและการรองรับอุปกรณ์ภายนอก เช่น:</p>
                <ul>
                    <li><strong>Intel Chipsets:</strong> Z-Series (ระดับสูง ปลดล็อกการโอเวอร์คล็อก), B-Series (กระแสหลัก คุ้มค่า), H-Series (ระดับเริ่มต้น)</li>
                    <li><strong>AMD Chipsets:</strong> X-Series (ผู้ชื่นชอบประสิทธิภาพสูง), B-Series (คุ้มราคาและประสิทธิภาพ), A-Series (ล่างสุดทั่วไป)</li>
                </ul>
            </div>

            <img src="images/chip.png" alt="chip" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card box-success">
                <h3>2. ซ็อกเก็ต CPU และสล็อตอุปกรณ์ความเร็วสูง</h3>
                <ul>
                    <li><strong>ประเภทซ็อกเก็ต (CPU Sockets):</strong>
                        <ul>
                            <li><strong>LGA (Land Grid Array):</strong> ขาพินโลหะตัวนำไฟฟ้าจะอยู่บนบอร์ดซ็อกเก็ต ตัว CPU จะมีลักษณะจุดสัมผัสเรียบ (เช่น ซ็อกเก็ตค่าย Intel ทั้งหมด และ AMD AM5) ต้องระวังพินล้มงอระหว่างติดตั้ง</li>
                            <li><strong>PGA (Pin Grid Array):</strong> ขาพินโลหะจะยื่นออกมาจากใต้ตัว CPU ส่วนซ็อกเก็ตเป็นรูรับพิน (เช่น ซ็อกเก็ต AMD AM4)</li>
                        </ul>
                    </li>
                    <li><strong>สล็อตขยายระบบ (PCIe Slots):</strong> สล็อตแบนด์วิดท์ความเร็วสูง แบ่งเป็นขนาดความยาวตามจำนวนเลนส่งสัญญาณ (Lanes) ได้แก่ x16 (ใส่การ์ดจอเป็นหลัก), x8, x4 (การ์ดขยายความเร็วปานกลาง) และ x1 (สำหรับบอร์ดการ์ดเสียง/การ์ดแลนเพิ่ม)</li>
                </ul>
            </div>

            <img src="images/socket.png" alt="socket" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card box-warning">
                <h3>3. ระบบควบคุมกระแสไฟเมนบอร์ด (VRM - Voltage Regulator Module)</h3>
                <p>ทำหน้าที่แปลงกระแสไฟฟ้า 12V ที่รับจากสายไฟ CPU 8-pin ของพาวเวอร์ซัพพลาย ให้ลดระดับแรงดันเหลือ ~1.0V - 1.4V และมีความเรียบของไฟฟ้าสูงสุดเพื่อส่งเข้าสู่ทรานซิสเตอร์ภายใน CPU</p>
                <ul>
                    <li><strong>โครงสร้างเฟสไฟ (Power Phases):</strong> ประกอบด้วย <em>MOSFETs</em> (ทำหน้าที่ควบคุมสลับเปิดปิดจ่ายไฟฟ้า), <em>Chokes/Inductors</em> (กรองกระแสและเก็บไฟฟ้าสำรอง) และ <em>Capacitors</em> (กรองเสียงรบกวนคลื่นไฟฟ้า)</li>
                    <li>จำนวนเฟสไฟยิ่งมาก (เช่น 12+1+1 เฟส) ยิ่งช่วยกระจายความร้อนและจ่ายกระแสไฟฟ้าได้นิ่ง มั่นคงขึ้น เหมาะสำหรับการโอเวอร์คล็อกและการรองรับ CPU กินไฟสูงๆ</li>
                </ul>
            </div>

            <img src="images/vrm.png" alt="vrm" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card box-danger">
                <h3>4. ชิปเก็บบันทึกเฟิร์มแวร์ (BIOS / UEFI ROM) และแบตเตอรี่สำรอง</h3>
                <p>ชิปหน่วยความจำประเภทแฟลชอ่านอย่างเดียว (EEPROM ROM) ที่มีข้อมูลเฟิร์มแวร์ระบบคอยตรวจอุปกรณ์และบูตระบบแรกเริ่มขึ้นมา</p>
                <ul>
                    <li><strong>ถ่านเมนบอร์ด (CMOS Battery):</strong> แบตเตอรี่เหรียญลิเธียมรหัส <strong>CR2032 (3V)</strong> ทำหน้าที่จ่ายพลังงานไฟฟ้ากระแสตรงขนานต่ำให้กับชิปนาฬิกาเวลาจริง (RTC) และชิป CMOS เพื่อเก็บบันทึกการตั้งค่าการปรับแต่งระบบไว้ไม่ให้ลบเลือนหายไปเมื่อถอดปลั๊กไฟหลัก</li>
                </ul>
            </div>

            <img src="images/bios.png" alt="bios" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">

            <div class="detailed-card" style="border-left:5px solid #14b8a6; background:rgba(20,184,166,0.06);">
                <h3 style="color:#2dd4bf;">5. ชิปเซ็ตควบคุมการ์ดเสียงและเครือข่ายอินเทอร์เน็ต (Onboard Audio & LAN)</h3>
                <ul>
                    <li><strong>ชิปเซ็ตเสียง:</strong> แปลงรหัสไฟล์เสียงดิจิทัลออกมาเป็นอนาล็อกออกพอร์ตลำโพงเสียง (DAC - Digital to Analog Converter) ช่างบำรุงรักษาควรรู้จักบริเวณบอร์ดที่มีรอยแยกแผงวงจร (Audio Isolation Path) เพื่อลดทอนคลื่นไฟฟ้าแทรกแซงจากตัวบอร์ดหลัก</li>
                    <li><strong>ชิปควบคุมแลน (Ethernet Controller):</strong> ชิปประมวลผลรับส่งแพ็กเก็ตข้อมูลกับระบบเครือข่ายผ่านพอร์ต RJ45 (ความเร็วมาตรฐานปัจจุบัน 1 Gbps, บอร์ดเกมมิ่ง 2.5 Gbps, เซิร์ฟเวอร์ 10 Gbps)</li>
                </ul>
            </div>

            <img src="images/audio_lan.png" alt="audio_lan" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">
        ` 
    }
];