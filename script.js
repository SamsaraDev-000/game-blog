// Games Data with images and download links
        const gamesData = [
            {
                title: 'Free Fire',
                type: 'باتل رويال',
                icon: '🔥',
                badge: 'خفيف',
                image: 'freefire.jpg',
                description: 'لعبة باتل رويال خفيفة وسريعة، مشهورة عالمياً بين 100 مليون لاعب.',
                specs: [
                    { label: 'حجم التحميل:', value: '500 MB' },
                     { label: 'RELEASE DATE:', value: '2017' }
                ],
                pros: ['خفيفة جداً', 'سرعة استجابة عالية', 'تحديثات منتظمة'],
                cons: ['رسومات بسيطة', 'أقل واقعية من PUBG'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.dts.freefireth',
                visitLink: 'https://ff.garena.com/'
            },
            {
                title: 'PUBG Mobile',
                type: 'باتل رويال',
                icon: '🎯',
                badge: 'واقعي',
                image: 'pubg.jpg',
                description: 'نسخة محمولة من لعبة PUBG الشهيرة عالمياً. تقدم تجربة واقعية احترافية.',
                specs: [
                    { label: 'حجم التحميل:', value: '2-2.5 GB' },
                    { label: 'الأداء:', value: 'عالي جداً' },
                    { label: 'الإنترنت:', value: '5+ Mbps (ثابت)' },
                    { label: 'عدد اللاعبين:', value: '100 لاعب' },
                    { label: 'المعايير:', value: 'Android 8+ أو iOS 11+' }
                ],
                pros: ['جرافيك متقدم', 'ميكانيكا واقعية', 'بطولات احترافية'],
                cons: ['تحتاج جهاز قوي', 'حجم التحميل كبير'],
                rating: 5,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.pubg.imobile',
                visitLink: 'https://www.pubgmobile.com/'
            },
            {
                title: 'Call of Duty Mobile',
                type: 'ألعاب حرب',
                icon: '💥',
                badge: 'حرب',
                image: 'cod.jpg',
                description: 'نسخة محمولة من سلسلة Call of Duty الشهيرة. تجمع بين السرعة والجودة.',
                specs: [
                    { label: 'حجم التحميل:', value: '1.5-2 GB' },
                    { label: 'الأداء:', value: 'عالي' },
                    { label: 'الإنترنت:', value: '4-6 Mbps' },
                    { label: 'أطوار اللعب:', value: 'متعددة (TDM, BR, Zombies)' },
                    { label: 'عدد الخوادم:', value: 'عالمي + محلي' }
                ],
                pros: ['متنوعة الأطوار', 'جرافيك قوي', 'محتوى دوري جديد'],
                cons: ['ثقيلة نسبياً', 'بطاريات سريعة الاستنزاف'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter',
                visitLink: 'https://www.callofduty.com/mobile'
            },
            {
                title: 'Subway Surfers',
                type: 'خفيفة',
                icon: '🚇',
                badge: 'كلاسيك',
                image: 'subway.jpg',
                description: 'لعبة جري لا نهائي كلاسيكية وسهلة جداً. تعمل على أي هاتف حتى القديم.',
                specs: [
                    { label: 'حجم التحميل:', value: '100-150 MB' },
                    { label: 'الأداء:', value: 'ممتاز (حتى Android 4.4)' },
                    { label: 'الإنترنت:', value: 'اختياري' },
                    { label: 'المتوسط:', value: 'الجري والتجنب' },
                    { label: 'جودة الجرافيك:', value: 'رسومات خفيفة وملونة' }
                ],
                pros: ['خفيفة جداً', 'سهلة للجميع', 'لا تحتاج انترنت مستمر'],
                cons: ['نفس اللعب المتكرر', 'نموذج اقتصادي بإعلانات'],
                rating: 5,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurfers',
                visitLink: 'https://www.subwaysurfers.com/'
            },
            {
                title: 'Minecraft',
                type: 'عالم مفتوح',
                icon: '⛏️',
                badge: 'إبداع',
                image: 'minecraft.jpg',
                description: 'لعبة عالم مفتوح لانهائي حيث تستطيع البناء والاستكشاف والمغامرة.',
                specs: [
                    { label: 'حجم التحميل:', value: '1 GB' },
                    { label: 'الأداء:', value: 'متوسط' },
                    { label: 'الإنترنت:', value: 'اختياري' },
                    { label: 'أطوار اللعب:', value: 'Creative, Survival, Adventure' },
                    { label: 'عمر اللعبة:', value: '14+ سنة' }
                ],
                pros: ['إبداعية لا نهائية', 'تعليمية', 'مجتمع ضخم'],
                cons: ['قد تكون محبطة للمبتدئين', 'تحديثات متكررة'],
                rating: 5,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe',
                visitLink: 'https://www.minecraft.net/'
            },
            {
                title: 'Shadow Fight 4',
                type: 'قتال',
                icon: '⚔️',
                badge: 'أكشن',
                image: 'shadow4.jpg',
                description: 'لعبة قتال بطريقة الظل (Shadow) مع رسومات فنية جميلة ومقاتلين متنوعين.',
                specs: [
                    { label: 'حجم التحميل:', value: '300-500 MB' },
                    { label: 'الأداء:', value: 'ممتاز' },
                    { label: 'الإنترنت:', value: 'لا يلزم للعب الرئيسي' },
                    { label: 'عدد المقاتلين:', value: '20+ مقاتل فريد' },
                    { label: 'نمط اللعب:', value: 'حملة + تصادي متعددة' }
                ],
                pros: ['رسومات فريدة', 'ميكانيكا قتالية عميقة', 'بدون انترنت'],
                cons: ['محتوى مدفوع', 'تقدم بطيء أحياناً'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.nekki.shadowfight3',
                visitLink: 'https://shadowfight.com/'
            },
            {
                title: 'Candy Crush',
                type: 'خفيفة',
                icon: '🍬',
                badge: 'ألغاز',
                image: 'candy.jpg',
                description: 'لعبة ألغاز تطابق الحلويات الأكثر تحميلاً عالمياً مع ملايين المشجعين.',
                specs: [
                    { label: 'حجم التحميل:', value: '200 MB' },
                    { label: 'الأداء:', value: 'ممتاز' },
                    { label: 'الإنترنت:', value: 'متطلب للتقدم' },
                    { label: 'عدد المستويات:', value: '5000+ مستوى' },
                    { label: 'نموذج الأسعار:', value: 'مجاني + مشتريات' }
                ],
                pros: ['مشهورة جداً', 'سهلة جداً', 'محتوى دوري'],
                cons: ['إدمانية', 'نموذج اقتصادي قوي'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga',
                visitLink: 'https://www.candycrush.com/'
            },
            {
                title: 'Hill Climb Racing',
                type: 'خفيفة',
                icon: '🏎️',
                badge: 'فيزياء',
                image: 'hillclimb.jpg',
                description: 'لعبة قيادة ممتعة بمحرك فيزياء واقعي. قد السيارات عبر تضاريس صعبة.',
                specs: [
                    { label: 'حجم التحميل:', value: '150 MB' },
                    { label: 'الأداء:', value: 'ممتاز' },
                    { label: 'الإنترنت:', value: 'اختياري' },
                    { label: 'عدد المركبات:', value: '50+ مركبة' },
                    { label: 'عدد المراحل:', value: '50+ مرحلة متنوعة' }
                ],
                pros: ['خفيفة جداً', 'فيزياء واقعية', 'محتوى غني'],
                cons: ['إعلانات متكررة', 'نموذج تقدم بطيء'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.fingersoft.hillclimb',
                visitLink: 'https://www.hillclimbracingmoto.com/'
            }
        ];

        // AI Apps Data with images and links
        const appsData = [
            {
                title: 'Claude (Anthropic)',
                type: 'LLM',
                icon: '🧠',
                badge: 'متقدم',
                image: 'claude.jpg',
                description: 'مساعد ذكي حديث طورته Anthropic بقدرات فهم نصي عميقة وأخلاقيات ذكية.',
                specs: [
                    { label: 'النموذج:', value: 'Claude 3.5 Sonnet' },
                    { label: 'السعر:', value: 'مجاني (محدود) + متقدم' },
                    { label: 'السرعة:', value: 'سريع جداً' },
                    { label: 'حد التوكنز:', value: '200K توكن' },
                    { label: 'المميزات:', value: 'تحليل نصوص، برمجة، كتابة' }
                ],
                pros: ['أخلاقيات ذكية', 'فهم عميق', 'جيد للبرمجة'],
                cons: ['نموذج حديث نسبياً', 'معرفة تصل 2024'],
                rating: 5,
                downloadLink: 'https://claude.ai',
                visitLink: 'https://www.anthropic.com/'
            },
            {
                title: 'ChatGPT (OpenAI)',
                type: 'LLM',
                icon: '💬',
                badge: 'شهير',
                image: 'chatqpt.jpg',
                description: 'أشهر نموذج لغوي في العالم طورته OpenAI. يتمتع بقدرات متعددة ومرنة جداً.',
                specs: [
                    { label: 'النموذج:', value: 'GPT-4o / GPT-4 Turbo' },
                    { label: 'السعر:', value: 'مجاني (محدود) + متقدم' },
                    { label: 'السرعة:', value: 'متوسط إلى سريع' },
                    { label: 'حد التوكنز:', value: '4K-128K توكن' },
                    { label: 'المميزات:', value: 'صور، نصوص، برمجة، رسم' }
                ],
                pros: ['الأكثر شهرة', 'متعددة المهام', 'تحديثات متكررة'],
                cons: ['موثوقية متغيرة', 'نموذج لغة ضخم'],
                rating: 5,
                downloadLink: 'https://chat.openai.com',
                visitLink: 'https://www.openai.com/'
            },
            {
                title: 'Google Gemini',
                type: 'LLM',
                icon: '✨',
                badge: 'متعدد',
                image: 'gemini.jpg',
                description: 'نموذج ذكاء اصطناعي جديد من Google بقدرات متعددة الطرائق.',
                specs: [
                    { label: 'النموذج:', value: 'Gemini Pro / Ultra' },
                    { label: 'السعر:', value: 'مجاني + متقدم' },
                    { label: 'السرعة:', value: 'سريع' },
                    { label: 'المدخلات:', value: 'نص، صور، فيديو، صوت' },
                    { label: 'المميزات:', value: 'فهم سياقي متقدم' }
                ],
                pros: ['متعدد الطرائق', 'سريع جداً', 'تكامل Google'],
                cons: ['أقل شهرة من ChatGPT', 'بحاجة تطوير أكثر'],
                rating: 4,
                downloadLink: 'https://gemini.google.com',
                visitLink: 'https://www.google.com/gemini/'
            },
            {
                title: 'Midjourney',
                type: 'صور',
                icon: '🎨',
                badge: 'صور',
                image: 'midjourney.jpg',
                description: 'أداة رائدة لتوليد الصور الفنية بالذكاء الاصطناعي. تنتج صور احترافية.',
                specs: [
                    { label: 'نموذج التوليد:', value: 'Midjourney V6' },
                    { label: 'السعر:', value: '$10-$120/شهر' },
                    { label: 'وقت التوليد:', value: '1-5 دقائق' },
                    { label: 'جودة الصور:', value: '1024x1024 فما فوق' },
                    { label: 'الاستخدام:', value: 'تجاري + شخصي' }
                ],
                pros: ['جودة عالية جداً', 'أسلوب فني متقدم', 'نتائج احترافية'],
                cons: ['سعر مرتفع', 'بحاجة توكنات شهرية'],
                rating: 5,
                downloadLink: 'https://www.midjourney.com',
                visitLink: 'https://www.midjourney.com/home'
            },
            {
                title: 'CapCut AI',
                type: 'فيديو',
                icon: '🎬',
                badge: 'فيديو',
                image: 'capcut.jpg',
                description: 'تطبيق تعديل فيديو شامل بميزات ذكاء اصطناعي. قص تلقائي وترجمة وتأثيرات.',
                specs: [
                    { label: 'التطبيق:', value: 'CapCut (مجاني)' },
                    { label: 'دقة التصدير:', value: '4K (مع اشتراك)' },
                    { label: 'المميزات:', value: 'قص ذكي، ترجمة، مؤثرات' },
                    { label: 'سهولة الاستخدام:', value: 'سهل جداً' },
                    { label: 'الوقت المطلوب:', value: '10-30 دقيقة لفيديو' }
                ],
                pros: ['مجاني تماماً', 'مميزات احترافية', 'واجهة سهلة'],
                cons: ['علامة مائية بدون اشتراك', 'قد تكون بطيئة أحياناً'],
                rating: 5,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.capcut.app',
                visitLink: 'https://www.capcut.com/'
            },
            {
                title: 'Remini AI',
                type: 'صور',
                icon: '📸',
                badge: 'صور',
                image: 'remini.jpg',
                description: 'تطبيق تحسين الصور القديمة والمشوشة باستخدام ذكاء اصطناعي.',
                specs: [
                    { label: 'التطبيق:', value: 'Remini (مجاني + متقدم)' },
                    { label: 'المدخلات:', value: 'صور قديمة، مشوشة، ضعيفة' },
                    { label: 'جودة الإخراج:', value: 'عالية جداً' },
                    { label: 'الوقت:', value: '5-30 ثانية' },
                    { label: 'الميزات:', value: 'تلوين، رفع دقة، حذف ضجيج' }
                ],
                pros: ['نتائج مثيرة', 'سريع جداً', 'سهل الاستخدام'],
                cons: ['محدود بدون اشتراك', 'قد لا تعمل على صور سيئة'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.remini.enhance',
                visitLink: 'https://remini.ai/'
            },
            {
                title: 'Google Assistant',
                type: 'مساعد',
                icon: '🔊',
                badge: 'صوت',
                image: 'google assis.jpg',
                description: 'مساعد صوتي ذكي من Google مدمج في معظم الهواتف.',
                specs: [
                    { label: 'التطبيق:', value: 'مدمج مجاني' },
                    { label: 'دقة التعرف:', value: 'عالية جداً (90+%)' },
                    { label: 'اللغات المدعومة:', value: '100+ لغة' },
                    { label: 'المميزات:', value: 'بحث، تحكم، جدولة، ترجمة' },
                    { label: 'الخصوصية:', value: 'محفوظة نسبياً' }
                ],
                pros: ['مدمج مجاني', 'دقة عالية', 'تكامل كامل'],
                cons: ['تتبع البيانات', 'قد تخطئ أحياناً'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.google.android.apps.googleassistant',
                visitLink: 'https://assistant.google.com/'
            },
            {
                title: 'Lensa AI',
                type: 'صور',
                icon: '🎭',
                badge: 'Avatar',
                image: 'lensa.jpg',
                description: 'تطبيق إنشاء صور احترافية و Avatar فنية من صورة واحدة.',
                specs: [
                    { label: 'التطبيق:', value: 'Lensa (مجاني + متقدم)' },
                    { label: 'الإدخال:', value: '10-20 صورة' },
                    { label: 'الأسلوب:', value: '100+ أسلوب فني' },
                    { label: 'الوقت:', value: '5-10 دقائق' },
                    { label: 'الجودة:', value: 'احترافية جداً' }
                ],
                pros: ['صور احترافية', 'أساليب متعددة', 'نتائج جميلة'],
                cons: ['تحتاج عدة صور', 'سعر الاشتراك مرتفع'],
                rating: 4,
                downloadLink: 'https://play.google.com/store/apps/details?id=com.lensa.app',
                visitLink: 'https://lensa.com/'
            }
        ];

        const tipsData = [
            {
                icon: '🎮',
                title: 'اختر اللعبة حسب قوة هاتفك',
                text: 'لا تحمل PUBG على هاتف رام 3GB. استخدم Free Fire أو Subway Surfers. تحقق من متطلبات اللعبة قبل التحميل.'
            },
            {
                icon: '🏋️',
                title: 'تدرب 30-60 دقيقة يومياً',
                text: 'التدريب المنتظم هو مفتاح الاحتراف. ركز على ألعاب واحدة بدل تجربة كل شيء. تابع اللاعبين الاحترافيين.'
            },
            {
                icon: '🎧',
                title: 'السماعات ضرورية للألعاب الحربية',
                text: 'الصوت يخبرك بموقع الأعداء. استخدم سماعات جيدة. اضبط مستوى الصوت بشكل صحيح.'
            },
            {
                icon: '👥',
                title: 'العب مع فريق متقدم',
                text: 'لعب الفريق يحسن مستواك. اختر لاعبين أفضل منك. التواصل والإشارات مهمة جداً.'
            },
            {
                icon: '👀',
                title: 'حماية عينيك - راحة كل 20 دقيقة',
                text: 'استخدم قاعدة 20-20-20 (كل 20 دقيقة انظر 20 ثانية بعيد 20 متر). قلل السطوع. قلل حجم الخط.'
            },
            {
                icon: '⚙️',
                title: 'اضبط الحساسية حسب هاتفك',
                text: 'جرب حساسية مختلفة. ركز على استقرار اليد. Free Fire: 90-100 General. PUBG: 120 TPP, 100 FPP.'
            },
            {
                icon: '🤖',
                title: 'استخدم Claude/ChatGPT للاستراتيجيات',
                text: 'اسأل Claude/ChatGPT عن استراتيجيات اللعبة. اطلب تحليل بطلك المفضل. احصل على نصائح شخصية.'
            },
            {
                icon: '📊',
                title: 'تتبع تقدمك بإحصائيات',
                text: 'سجل عدد الفوز والقتل والدقة. استخدم تطبيقات تحليل. راجع أخطاؤك كل أسبوع.'
            }
        ];

        const comparisonData = [
            { app: 'Claude', model: '3.5 Sonnet', price: 'مجاني+$20', speed: 'سريع جداً', accuracy: '⭐⭐⭐⭐⭐', privacy: 'محفوظة' },
            { app: 'ChatGPT', model: 'GPT-4o', price: 'مجاني+$20', speed: 'متوسط', accuracy: '⭐⭐⭐⭐⭐', privacy: 'محفوظة' },
            { app: 'Gemini', model: 'Pro Ultra', price: 'مجاني+$20', speed: 'سريع', accuracy: '⭐⭐⭐⭐', privacy: 'محفوظة' },
            { app: 'Midjourney', model: 'V6', price: '$10-120', speed: 'سريع', accuracy: '⭐⭐⭐⭐⭐', privacy: 'آمنة' },
            { app: 'CapCut', model: 'AI', price: 'مجاني', speed: 'سريع', accuracy: '⭐⭐⭐⭐', privacy: 'محفوظة' },
            { app: 'Remini', model: 'Pro', price: 'مجاني+$9.99', speed: 'سريع جداً', accuracy: '⭐⭐⭐⭐', privacy: 'آمنة' }
        ];

        // Render Games
        function renderGames(data) {
            const grid = document.getElementById('gamesGrid');
            grid.innerHTML = '';

            data.forEach((game, index) => {
                const stars = '⭐'.repeat(game.rating) + '☆'.repeat(5 - game.rating);
                const card = document.createElement('div');
                card.className = 'game-card';
                card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
                
                card.innerHTML = `
                    <div class="badge">${game.badge}</div>
                    <div class="game-image">
                        <img src="${game.image}" alt="${game.title}" onerror="this.style.display='none'">
                    </div>
                    <div class="game-content">
                        <div class="game-type">${game.type}</div>
                        <h3 class="game-title">${game.title}</h3>
                        <p class="game-description">${game.description}</p>
                        <div class="game-specs">
                            ${game.specs.map(spec => `
                                <div class="spec">
                                    <span class="spec-label">${spec.label}</span>
                                    <span class="spec-value">${spec.value}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="pros-cons">
                            <div class="pros">
                                <h4>المميزات ✓</h4>
                                <ul>
                                    ${game.pros.map(pro => `<li>${pro}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="cons">
                                <h4>العيوب ✗</h4>
                                <ul>
                                    ${game.cons.map(con => `<li>${con}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="rating">${stars}</div>
                        <div class="action-buttons">
                            <a href="${game.downloadLink}" target="_blank" class="download-btn">📥 تحميل</a>
                            <a href="${game.visitLink}" target="_blank" class="visit-btn">🌐 زيارة</a>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Render Apps
        function renderApps(data) {
            const grid = document.getElementById('appsGrid');
            grid.innerHTML = '';

            data.forEach((app, index) => {
                const stars = '⭐'.repeat(app.rating) + '☆'.repeat(5 - app.rating);
                const card = document.createElement('div');
                card.className = 'game-card';
                card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
                
                card.innerHTML = `
                    <div class="badge">${app.badge}</div>
                    <div class="game-image">
                        <img src="${app.image}" alt="${app.title}" onerror="this.style.display='none'">
                    </div>
                    <div class="game-content">
                        <div class="game-type">${app.type}</div>
                        <h3 class="game-title">${app.title}</h3>
                        <p class="game-description">${app.description}</p>
                        <div class="game-specs">
                            ${app.specs.map(spec => `
                                <div class="spec">
                                    <span class="spec-label">${spec.label}</span>
                                    <span class="spec-value">${spec.value}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="pros-cons">
                            <div class="pros">
                                <h4>المميزات ✓</h4>
                                <ul>
                                    ${app.pros.map(pro => `<li>${pro}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="cons">
                                <h4>العيوب ✗</h4>
                                <ul>
                                    ${app.cons.map(con => `<li>${con}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="rating">${stars}</div>
                        <div class="action-buttons">
                            <a href="${app.downloadLink}" target="_blank" class="download-btn">📥 دخول</a>
                            <a href="${app.visitLink}" target="_blank" class="visit-btn">🌐 الموقع</a>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Render Tips
        function renderTips() {
            const grid = document.getElementById('tipsGrid');
            grid.innerHTML = '';

            tipsData.forEach((tip, index) => {
                const box = document.createElement('div');
                box.className = 'tip-box';
                box.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
                
                box.innerHTML = `
                    <div class="tip-icon">${tip.icon}</div>
                    <div class="tip-title">${tip.title}</div>
                    <div class="tip-text">${tip.text}</div>
                `;
                grid.appendChild(box);
            });
        }

        // Render Comparison Table
        function renderComparison() {
            const tbody = document.getElementById('comparisonBody');
            tbody.innerHTML = '';

            comparisonData.forEach((row, index) => {
                const tr = document.createElement('tr');
                tr.style.animation = `fadeInUp 0.6s ease-out ${index * 0.05}s both`;
                tr.innerHTML = `
                    <td><strong>${row.app}</strong></td>
                    <td>${row.model}</td>
                    <td>${row.price}</td>
                    <td>${row.speed}</td>
                    <td>${row.accuracy}</td>
                    <td>${row.privacy}</td>
                `;
                tbody.appendChild(tr);
            });
        }

        // Filter Games
        function filterGames(category) {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            let filtered = gamesData;
            if (category !== 'all') {
                filtered = gamesData.filter(game => game.type.includes(category));
            }

            renderGames(filtered);
            updateNoResults('gamesGrid');
        }

        // Filter Apps
        function filterApps(category) {
            const buttons = Array.from(document.querySelectorAll('.filter-btn')).slice(1);
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            let filtered = appsData;
            if (category !== 'all') {
                filtered = appsData.filter(app => app.type.includes(category));
            }

            renderApps(filtered);
        }

        // Search Games
        document.getElementById('searchBox').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = gamesData.filter(game =>
                game.title.toLowerCase().includes(query) ||
                game.description.toLowerCase().includes(query)
            );
            renderGames(filtered);
            updateNoResults('gamesGrid');
        });

        // Search Apps
        document.getElementById('appsSearch').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = appsData.filter(app =>
                app.title.toLowerCase().includes(query) ||
                app.description.toLowerCase().includes(query)
            );
            renderApps(filtered);
        });

        // Update No Results
        function updateNoResults(gridId) {
            const grid = document.getElementById(gridId);
            const noResults = document.getElementById('noResults');
            if (grid.children.length === 0) {
                noResults.classList.add('show');
            } else {
                noResults.classList.remove('show');
            }
        }

        // Hamburger Menu
        document.getElementById('hamburger').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.nav-menu').classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('hamburger').classList.remove('active');
                document.querySelector('.nav-menu').classList.remove('active');
            });
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Back to Top Button
        const backToTopBtn = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Initialize
        renderGames(gamesData);
        renderApps(appsData);
        renderTips();
        renderComparison();