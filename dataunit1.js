window.courseContentUnit = [
    {
        title: "แนะนำรายวิชา",
        content: `
            <h1>จุดประสงค์รายวิชา (Course Objectives)</h1>
            <p>หลักสูตรวิชาการบำรุงรักษาคอมพิวเตอร์ (Computer Maintenance) มุ่งเน้นสร้างทักษะระดับมืออาชีพตามมาตรฐานวิชาชีพ โดยกำหนดจุดประสงค์ดังนี้:</p>
            <ol>
                <li><strong>ด้านความรู้:</strong> มีความรู้ความเข้าใจเกี่ยวกับสถาปัตยกรรมทางกายภาพ หลักการทำงานเชิงลึก และอินเตอร์เฟซการเชื่อมต่อของอุปกรณ์คอมพิวเตอร์และอุปกรณ์ต่อพ่วงทุกประเภท</li>
                <li><strong>ด้านทักษะ:</strong> สามารถปฏิบัติการประกอบเครื่องคอมพิวเตอร์ตามหลักวิศวกรรม ติดตั้งระบบปฏิบัติการและโปรแกรมประยุกต์ ดำเนินการบำรุงรักษาเชิงป้องกัน (Preventive Maintenance) และแก้ไขปัญหาด้วยโปรแกรมอรรถประโยชน์ (Utility Programs) ได้อย่างถูกต้อง</li>
                <li><strong>ด้านคุณลักษณะที่พึงประสงค์:</strong> มีคุณธรรม จริยธรรม ค่านิยมที่ดี และยึดมั่นในจรรยาบรรณวิชาชีพคอมพิวเตอร์ รวมถึงตระหนักถึงความปลอดภัยของข้อมูล ความเป็นส่วนตัว และความปลอดภัยทางไฟฟ้า (ESD & Electrical Safety)</li>
            </ol>
            
            <h2>สมรรถนะรายวิชา (Course Competencies)</h2>
            <ul>
                <li>แสดงความรู้เกี่ยวกับโครงสร้าง หลักการทำงาน และอินเตอร์เฟซมาตรฐานของระบบคอมพิวเตอร์และอุปกรณ์ต่อพ่วง</li>
                <li>วางแผนการเลือกชิ้นส่วน ตรวจสอบความเข้ากันได้ (Compatibility Matrix) และประกอบเครื่องคอมพิวเตอร์ตามข้อกำหนดทางเทคนิค</li>
                <li>ติดตั้งและตั้งค่าระบบปฏิบัติการ (Windows 10/11) รวมถึงซอฟต์แวร์ควบคุมอุปกรณ์ (Device Driver) และแอปพลิเคชันพื้นฐาน</li>
                <li>ดำเนินการบำรุงรักษาเชิงป้องกันทั้งระบบฮาร์ดแวร์และซอฟต์แวร์ เพื่อยืดอายุการใช้งานและลดความเสี่ยงการหยุดทำงานของระบบ (Downtime)</li>
                <li>วิเคราะห์ จำแนกอาการเสีย ตรวจสอบ และแก้ไขปัญหาคอมพิวเตอร์โดยใช้ซอฟต์แวร์ตรวจวินิจฉัยและโปรแกรมอรรถประโยชน์</li>
            </ul>

            <h2>โครงสร้างคะแนนและการประเมินผล (Evaluation Schema)</h2>
            <table>
                <thead>
                    <tr>
                        <th>หัวข้อการประเมิน</th>
                        <th style="text-align:center;">สัดส่วนคะแนน</th>
                        <th>รูปแบบการประเมิน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:bold;">จิตพิสัยและจรรยาบรรณวิชาชีพ</td>
                        <td style="text-align:center;">20%</td>
                        <td>การตรงต่อเวลา ความปลอดภัย และการดูแลรักษาพื้นที่ปฏิบัติการ</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">การทดสอบภาคทฤษฎี (Quiz & Exam)</td>
                        <td style="text-align:center;">10%</td>
                        <td>แบบทดสอบย่อยรายหน่วย และแบบทดสอบปลายภาคผ่านระบบสารสนเทศ</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;">การประเมินทักษะการปฏิบัติงาน (Practical Task)</td>
                        <td style="text-align:center;">70%</td>
                        <td>การเลือกอุปกรณ์, การประกอบฮาร์ดแวร์, การลง OS, และการแก้ปัญหาเฉพาะหน้า</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    {
        title: "1.1 ประเภทของคอมพิวเตอร์",
        content: `
            <h1>1.1 ประเภทของคอมพิวเตอร์ (Classification of Computers)</h1>
            <p>ในยุคปัจจุบัน คอมพิวเตอร์ได้รับการพัฒนาให้มีความหลากหลายเพื่อตอบสนองต่อสเปกการคำนวณ ขอบเขตข้อมูล และความเร็วในการประมวลผล โดยแบ่งประเภทตามความสามารถทางกายภาพและโครงสร้างหลักการทำงานได้ดังนี้:</p>
            
            <div class="detailed-card box-info">
                <h3>1. ซูเปอร์คอมพิวเตอร์ (Supercomputer)</h3>
                <p><strong>ประสิทธิภาพสูงที่สุดในโลก</strong> วัดความเร็วด้วยหน่วย FLOPS (Floating Point Operations Per Second) เช่น ระดับ Petaflops หรือ Exaflops</p>
                <ul>
                    <li><strong>สถาปัตยกรรม:</strong> ใช้โครงสร้างแบบประมวลผลคู่ขนานขนาดใหญ่มาก (Massive Parallel Processing - MPP) ที่มี CPU/GPU ทำงานพร้อมกันหลายแสนหรือหลายล้านคอร์</li>
                    <li><strong>ระบบระบายความร้อน:</strong> จำเป็นต้องใช้การระบายความร้อนระดับพิเศษ เช่น ระบบของเหลวไหลผ่านโดยตรง (Direct-to-Chip Liquid Cooling) หรือก๊าซไนโตรเจนเหลว</li>
                    <li><strong>การใช้งาน:</strong> การพยากรณ์สภาพอากาศระดับโลก, งานวิจัยฟิสิกส์นิวเคลียร์, การจำลองการเคลื่อนไหวทางเคมีชีวภาพเพื่อผลิตยารักษาโรค</li>
                </ul>
            </div>

            <div class="detailed-card box-success">
                <h3>2. เมนเฟรมคอมพิวเตอร์ (Mainframe Computer)</h3>
                <p>เน้นความเสถียรและความน่าเชื่อถือของระบบระดับสูงสุด (System Availability) และความสามารถในการทำธุรกรรมพร้อมๆ กันมหาศาล (Online Transaction Processing - OLTP)</p>
                <ul>
                    <li><strong>คุณลักษณะเด่น:</strong> มีการออกแบบระบบสำรองแบบร้อน (Hot-swap/Redundancy) สำหรับอุปกรณ์หลักทุกชิ้น เช่น พาวเวอร์ซัพพลาย และการ์ดประมวลผล</li>
                    <li><strong>การทำงาน:</strong> รองรับการสร้างเซิร์ฟเวอร์เสมือน (Virtualization) หลายร้อยระบบภายในเครื่องเดียว ทำงานแบบไม่หยุดชะงัก (Downtime ใกล้เคียง 0%)</li>
                    <li><strong>การใช้งาน:</strong> ระบบฐานข้อมูลธนาคารหลัก (Core Banking), ระบบตรวจสอบสิทธิ์สายการบิน, บริษัทประกันภัยระดับประเทศ</li>
                </ul>
            </div>

            <div class="detailed-card box-warning">
                <h3>3. เวิร์กสเตชัน (Workstation)</h3>
                <p>เป็นไมโครคอมพิวเตอร์ระดับสูง ออกแบบมาเพื่อการใช้งานแบบคนเดียว (Single User) แต่ต้องการกำลังประมวลผลที่เหนือกว่าคอมพิวเตอร์ทั่วไปหลายเท่า</p>
                <ul>
                    <li><strong>ฮาร์ดแวร์หลัก:</strong> ใช้หน่วยประมวลผลเฉพาะด้าน เช่น Intel Xeon หรือ AMD Ryzen Threadripper, แรมแบบแก้ไขข้อผิดพลาด (ECC RAM) และการ์ดจองานออกแบบโดยเฉพาะ เช่น NVIDIA RTX Ada Generation</li>
                    <li><strong>การใช้งาน:</strong> งานเขียนแบบวิศวกรรม (CAD/CAM), การเรนเดอร์ภาพยนตร์ 3 มิติ, การคำนวณข้อมูลสถิติขนาดใหญ่ (Data Science)</li>
                </ul>
            </div>

            <div class="detailed-card">
                <h3 style="color:#a5b4fc;">4. ไมโครคอมพิวเตอร์ หรือ พีซี (Microcomputer / Personal Computer - PC)</h3>
                <p>คอมพิวเตอร์ส่วนบุคคลที่พบได้ทั่วไปตามสำนักงานและบ้านเรือน มีการจัดสเปกและราคาที่เข้าถึงได้ง่าย</p>
                <ul>
                    <li><strong>เดสก์ท็อป (Desktop):</strong> คอมพิวเตอร์ตั้งโต๊ะที่มีประสิทธิภาพสูง ระบายความร้อนดี อัปเกรดชิ้นส่วนภายในได้ง่าย</li>
                    <li><strong>แล็ปท็อป (Laptop / Notebook):</strong> เน้นความสะดวกในการพกพา ทำงานด้วยแบตเตอรี่ในตัว ออกแบบโครงสร้างประหยัดพลังงาน</li>
                </ul>
            </div>

            <div class="detailed-card box-danger">
                <h3>5. คอมพิวเตอร์ฝังตัว (Embedded System)</h3>
                <p>ไมโครโปรเซสเซอร์ขนาดเล็กที่ออกแบบมาเพื่อทำหน้าที่เฉพาะอย่างเพียงอย่างเดียว ฝังตัวอยู่ในอุปกรณ์ไฟฟ้าหรือเครื่องกลอื่นๆ</p>
                <ul>
                    <li><strong>คุณลักษณะเด่น:</strong> มีการใช้ทรัพยากรระบบต่ำมาก ทำงานผ่านระบบปฏิบัติการเวลาจริง (RTOS) หรือเขียนคำสั่งตรงลงบนรอม (Firmware)</li>
                    <li><strong>การใช้งาน:</strong> กล่อง ECU ในรถยนต์, เครื่องซักผ้าอัตโนมัติ, สมาร์ททีวี, อุปกรณ์ IoT (Internet of Things)</li>
                </ul>
            </div>
        `
    },
    {
        title: "1.2 หลักการทำงานของคอมพิวเตอร์",
        content: `
            <h1>1.2 หลักการทำงานของคอมพิวเตอร์ และสถาปัตยกรรมฟอนนอยมันน์</h1>
            <p>การทำงานของคอมพิวเตอร์ในปัจจุบันใช้แนวคิด <strong>สถาปัตยกรรมฟอนนอยมันน์ (Von Neumann Architecture)</strong> ซึ่งแบ่งโครงสร้างระบบฮาร์ดแวร์ออกเป็น 4 ส่วนสำคัญ ดังนี้:</p>

            <div class="callout-box box-info">
                <h3>โครงสร้างสถาปัตยกรรม Von Neumann</h3>
                <ol>
                    <li><strong>หน่วยประมวลผลกลาง (CPU - Central Processing Unit):</strong>
                        <ul>
                            <li><strong>Control Unit (CU):</strong> ถอดรหัสคำสั่ง และส่งสัญญาณควบคุมไปยังส่วนอื่น</li>
                            <li><strong>Arithmetic Logic Unit (ALU):</strong> ทำหน้าที่คำนวณทางคณิตศาสตร์ (+, -, *, /) และเปรียบเทียบทางตรรกศาสตร์ (AND, OR, NOT)</li>
                            <li><strong>Registers:</strong> หน่วยความจำขนาดเล็กที่มีความเร็วสูงสุดภายใน CPU เช่น PC (Program Counter) ชี้ตำแหน่งคำสั่งถัดไป และ ACC (Accumulator) เก็บผลลัพธ์การคำนวณชั่วคราว</li>
                        </ul>
                    </li>
                    <li><strong>หน่วยความจำหลัก (Main Memory):</strong> เก็บทั้งข้อมูลและชุดคำสั่ง (Data & Instructions) เพื่อให้ CPU เข้าไปดึงมาประมวลผลอย่างรวดเร็ว (RAM, ROM)</li>
                    <li><strong>ระบบอินพุต/เอาต์พุต (Input/Output System):</strong> ส่วนติดต่อกับผู้ใช้และอุปกรณ์ภายนอกเพื่อรับเข้าข้อมูลและส่งออกผลลัพธ์</li>
                    <li><strong>ระบบบัส (System Bus):</strong> ช่องทางการรับส่งข้อมูลและสัญญาณภายในบอร์ด แบ่งเป็น:
                        <ul>
                            <li><em>Data Bus:</em> ส่งข้อมูลดิบระหว่างอุปกรณ์ (สองทิศทาง)</li>
                            <li><em>Address Bus:</em> ระบุตำแหน่งหน่วยความจำที่ต้องการอ่าน/เขียน (ทิศทางเดียวจาก CPU)</li>
                            <li><em>Control Bus:</em> ส่งสัญญาณควบคุมสถานะการอ่าน/เขียนหรือขัดจังหวะ (Interrupt)</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <h3>วงจรการทำงานของคำสั่ง (Instruction Cycle / Fetch-Decode-Execute Cycle)</h3>
            <p>กระบวนการทำงานหลักที่ CPU ทำงานวนซ้ำอย่างต่อเนื่องล้านๆ ครั้งต่อวินาที มี 4 ขั้นตอนย่อยดังนี้:</p>
            <table>
                <thead>
                    <tr>
                        <th style="width:20%; text-align:center;">ขั้นตอน</th>
                        <th style="width:30%;">ชื่อขั้นตอน</th>
                        <th style="width:50%;">รายละเอียดการทำงาน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align:center; font-weight:bold; color:#38bdf8;">1</td>
                        <td style="font-weight:bold;">การดึงคำสั่ง (Fetch)</td>
                        <td>CPU ดึงชุดคำสั่งถัดไปจากหน่วยความจำหลัก (RAM) ตามที่อยู่ระบุในหน่วยความจำชี้ตำแหน่งคำสั่ง (PC Register) เข้ามาเก็บไว้ใน Instruction Register (IR)</td>
                    </tr>
                    <tr>
                        <td style="text-align:center; font-weight:bold; color:#38bdf8;">2</td>
                        <td style="font-weight:bold;">การถอดรหัส (Decode)</td>
                        <td>หน่วยควบคุม (Control Unit) แปลงชุดรหัสคำสั่ง (Opcode) ให้กลายเป็นสัญญาณไฟฟ้าที่อุปกรณ์ควบคุมและวงจรในหน่วย ALU เข้าใจได้</td>
                    </tr>
                    <tr>
                        <td style="text-align:center; font-weight:bold; color:#38bdf8;">3</td>
                        <td style="font-weight:bold;">การปฏิบัติตามคำสั่ง (Execute)</td>
                        <td>หน่วยคำนวณ (ALU) ทำการประมวลผลคำนวณทางคณิตศาสตร์ ตรรกศาสตร์ หรือจัดส่ง/ดึงข้อมูลตามที่คำสั่งนั้นระบุไว้</td>
                    </tr>
                    <tr>
                        <td style="text-align:center; font-weight:bold; color:#38bdf8;">4</td>
                        <td style="font-weight:bold;">การบันทึกผลลัพธ์ (Store)</td>
                        <td>นำผลลัพธ์ที่ได้จากการประมวลผลบันทึกกลับลงใน Register หรือเขียนลงบนที่อยู่หน่วยความจำหลัก (RAM) เพื่อใช้งานต่อไป</td>
                    </tr>
                </tbody>
            </table>
            <img src="images/ipo-model.png" alt="ipo" style="width:100%; max-width:500px; display:block; margin:25px auto; border-radius:25px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 10px 20px rgba(0,0,0,0.3);">
        `
    },
    {
        title: "1.3 ปัจจัยในการทำงานของคอมพิวเตอร์",
        content: `
            <h1>1.3 องค์ประกอบในการขับเคลื่อนระบบคอมพิวเตอร์</h1>
            <p>เพื่อให้การทำงานของคอมพิวเตอร์ครบถ้วนสมบูรณ์ จะต้องมี 4 ปัจจัยประสานงานร่วมกันอย่างเป็นเอกภาพ:</p>
            
            <div class="grid-2col">
                <div class="detailed-card box-info">
                    <h3>1. ฮาร์ดแวร์ (Hardware)</h3>
                    <p>ส่วนโครงสร้างและกายภาพภายนอกของคอมพิวเตอร์ที่สัมผัสได้ จับต้องได้เชิงระบบกลไก แบ่งตามหน้าที่ 5 ส่วนหลักคือ:</p>
                    <ul>
                        <li>อุปกรณ์รับข้อมูล (Input)</li>
                        <li>อุปกรณ์ประมวลผล (Processing)</li>
                        <li>หน่วยความจำและจัดเก็บ (Memory/Storage)</li>
                        <li>อุปกรณ์แสดงผล (Output)</li>
                        <li>อุปกรณ์สื่อสารเครือข่าย (Communication)</li>
                    </ul>
                </div>

                <div class="detailed-card box-success">
                    <h3>2. ซอฟต์แวร์ (Software)</h3>
                    <p>ชุดคำสั่งที่ถูกเขียนขึ้นเป็นโปรแกรม เพื่อสั่งให้ฮาร์ดแวร์ทำงานตามเป้าหมาย แบ่งเป็น:</p>
                    <ul>
                        <li><strong>System Software:</strong> ควบคุมฮาร์ดแวร์ เช่น Windows, Linux, Device Drivers</li>
                        <li><strong>Application Software:</strong> ทำงานเฉพาะด้าน เช่น Web Browser, Office Programs, Photoshop</li>
                        <li><strong>Runtime/API:</strong> เลเยอร์สนับสนุนการรันแอปพลิเคชัน เช่น .NET, DirectX, VC++ Redistributable</li>
                    </ul>
                </div>

                <div class="detailed-card box-warning">
                    <h3>3. บุคลากร (Peopleware)</h3>
                    <p>ทรัพยากรบุคคลที่มีหน้าที่จัดการ พัฒนา ควบคุม และใช้อุปกรณ์ระบบคอมพิวเตอร์</p>
                    <ul>
                        <li><strong>System Architect/Analyst:</strong> ผู้ออกแบบและวางระบบโครงสร้าง</li>
                        <li><strong>System/Network Administrator:</strong> ผู้ดูแลความปลอดภัยและเซิร์ฟเวอร์</li>
                        <li><strong>Database Administrator (DBA):</strong> ผู้ดูแลจัดการระบบฐานข้อมูลขององค์กร</li>
                        <li><strong>Computer Technician:</strong> ช่างเทคนิคผู้ประกอบ ซ่อมแซม และดูแลระบบ</li>
                        <li><strong>Developer/Programmer:</strong> ผู้เขียนและพัฒนาชุดคำสั่ง</li>
                        <li><strong>End User:</strong> ผู้ใช้งานทั่วไปในระดับแอปพลิเคชัน</li>
                    </ul>
                </div>

                <div class="detailed-card box-danger">
                    <h3>4. ข้อมูลและสารสนเทศ</h3>
                    <p>ตัวแปรที่ถูกนำเข้ามาประมวลผลเพื่อให้ได้ผลลัพธ์เชิงธุรกิจและวิชาการ</p>
                    <ul>
                        <li><strong>ข้อมูล (Data):</strong> ข้อเท็จจริงดิบที่ไม่มีความหมายในตัวเอง เช่น ตัวเลข อักษรดิบ พิกเซลของรูปภาพ</li>
                        <li><strong>สารสนเทศ (Information):</strong> ข้อมูลดิบที่ผ่านการกรอง สรุปผล วิเคราะห์เชิงสถิติ หรือประมวลผลแล้ว เช่น รายงานยอดขาย กราฟพยากรณ์</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        title: "1.4 อุปกรณ์ต่อพ่วง",
        content: `
            <h1>1.4 อุปกรณ์ต่อพ่วง (Peripheral Devices & Interface Standards)</h1>
            <p>อุปกรณ์ต่อพ่วงคือ ชิ้นส่วนฮาร์ดแวร์ภายนอกที่เชื่อมต่อเข้าร่วมทำงานกับตัวเครื่องหลักของคอมพิวเตอร์ผ่านทางพอร์ตเชื่อมต่อต่างๆ ดังนี้:</p>

            <div class="callout-box box-info">
                <h3>ประเภทอุปกรณ์ต่อพ่วงเชิงวิศวกรรม</h3>
                <ol>
                    <li><strong>อุปกรณ์รับเข้า (Input Peripherals):</strong>
                        <ul>
                            <li><strong>คีย์บอร์ด (Keyboard):</strong> แบบเมมเบรน (ใช้ปุ่มกดแผ่นยางช็อตลายวงจร), แบบกลไก (Mechanical Switch - แป้นสวิตช์อิสระ มีหน้าสัมผัสโลหะแยกปุ่ม เช่น Blue Switch/Red Switch) และแบบออปติคอล (ใช้เซ็นเซอร์แสงตัดผ่านเพื่อส่งคำสั่ง)</li>
                            <li><strong>เมาส์ (Mouse):</strong> ใช้เซ็นเซอร์จับภาพพื้นผิวเทียบระยะทาง (Optical Mouse - แสงไฟสีแดง LED) และเมาส์เลเซอร์ (Laser Mouse - ความละเอียดสูงกว่า ค่า DPI/IPS สูง)</li>
                        </ul>
                    </li>
                    <li><strong>อุปกรณ์แสดงผล (Output Peripherals):</strong>
                        <ul>
                            <li><strong>หน้าจอ (Monitor Display):</strong> TN Panel (การตอบสนองเร็วสูง แต่สีกระด้างและมุมมองแคบ), IPS Panel (สีตรงแม่นยำ เหมาะกับกราฟิก สีไม่เพี้ยนแม้มองเอียง), และ VA Panel (คอนทราสต์จัด สีดำลึกดำสนิท เหมาะกับการดูวิดีโอ)</li>
                            <li><strong>เครื่องพิมพ์ (Printers):</strong> Dot Matrix (เครื่องพิมพ์กระดาษเคมีแบบหัวเข็มเคาะผ่านผ้าหมึก), Inkjet (พ่นหยดหมึกเหลวผ่านหัวพ่น) และ Laser (ใช้แสงเลเซอร์ยิงลงดรัมสร้างประจุไฟฟ้าดูดผงหมึกโทนเนอร์ แล้วรีดด้วยความร้อนสูง)</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <h3>มาตรฐานพอร์ตการเชื่อมต่อความเร็วสูง (Interface Standards)</h3>
            <table>
                <thead>
                    <tr>
                        <th>พอร์ตเชื่อมต่อ</th>
                        <th style="text-align:center;">ความเร็วสูงสุด (Bandwidth)</th>
                        <th>ลักษณะเด่นและการประยุกต์ใช้งาน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight:bold; color:#fff;">USB 2.0</td>
                        <td style="text-align:center;">480 Mbps</td>
                        <td>เชื่อมต่อเมาส์ คีย์บอร์ด เครื่องพิมพ์ทั่วไป แรงดันไฟเลี้ยง 5V 0.5A</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; color:#fff;">USB 3.2 Gen 1 (USB 3.0)</td>
                        <td style="text-align:center;">5 Gbps</td>
                        <td>พอร์ตพลาสติกสีฟ้า รองรับการรับส่งข้อมูลความเร็วสูง เช่น Flash Drive</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; color:#fff;">USB 3.2 Gen 2 (USB 3.1)</td>
                        <td style="text-align:center;">10 Gbps</td>
                        <td>เชื่อมต่ออุปกรณ์ External SSD ประสิทธิภาพสูง จ่ายกระแสไฟฟ้าได้มากขึ้น</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; color:#fff;">Thunderbolt 4 / USB4</td>
                        <td style="text-align:center;">40 Gbps</td>
                        <td>ใช้พอร์ตลักษณะ Type-C รองรับเชื่อมต่อหน้าจอ 8K, eGPU และรับส่งไฟล์ความเร็วสูงสุด</td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold; color:#fff;">HDMI 2.1</td>
                        <td style="text-align:center;">48 Gbps</td>
                        <td>ส่งภาพความละเอียดสูง 4K 120Hz หรือ 8K 60Hz รองรับฟีเจอร์ eARC และ VRR</td>
                    </tr>
                </tbody>
            </table>
        `
    }
];