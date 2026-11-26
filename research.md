1. addEventListener()
هي method بنستخدمها علشان نضيف Event (حدث) لعنصر HTML، بحيث ينفذ كود معين لما يحصل الحدث.
- بتاخد نوع الحدث (زي click أو input أو submit).
- بتاخد function يتم تنفيذها عند حدوث الحدث.
- ممكن نضيف أكتر من Event لنفس العنصر.

2. Event Info
هو object بيتم تمريره للـ function عند حدوث الـ event، وبيحتوي على معلومات عن الحدث اللي حصل.
- event.target : العنصر اللي حصل عليه الحدث.
- event.type : نوع الحدث.
- event.currentTarget : العنصر اللي مربوط عليه الـ event listener.
- event.preventDefault() : لإلغاء السلوك الافتراضي للحدث.

3. preventDefault()
هي method بتمنع السلوك الافتراضي (Default Behavior) للعنصر أو الحدث، من غير ما توقف الحدث نفسه.
- بتستخدم غالبًا مع الـ Forms لمنع الصفحة من إعادة التحميل عند الـ submit.
- ممكن تستخدم مع Links لمنع الانتقال لصفحة تانية.
- مش بتوقف انتشار الحدث (Event Propagation).

4. OnSubmit – OnChange – OnInput
Event	وظيفته
submit	بيحصل لما المستخدم يعمل Submit للـ Form.
change	بيحصل لما قيمة العنصر تتغير ويتم اعتماد التغيير، زي اختيار قيمة أو الانتهاء من تعديل input.
input	بيحصل كل ما المستخدم يغير القيمة أثناء الكتابة أو التعديل.

الفرق بين input و change: input بيتنفذ مع كل تغيير أثناء الكتابة، بينما change غالبًا بيتنفذ بعد ما التغيير يتم اعتماده.