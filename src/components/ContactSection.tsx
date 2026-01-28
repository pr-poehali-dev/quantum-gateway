import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/36599752-a9c3-4951-a64a-e176e37ebb62', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Успех!",
          description: "Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить заявку. Позвоните по телефону.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка сети",
        description: "Проверьте интернет или позвоните нам: +7 (903) 565-60-27",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Свяжитесь с нами для бронирования билетов или дополнительной информации
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <a href="tel:+79035656027" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                +7 (903) 565-60-27
              </a>
              <a href="https://vk.ru/robotovystavka" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg text-primary hover:underline">
                👉 Наша группа ВКонтакте
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Ваше имя
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full"
                placeholder="Как к вам обращаться?"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Телефон или Email
              </label>
              <Input
                id="email"
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full"
                placeholder="+7 (___) ___-__-__ или email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Ваш вопрос
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full resize-none"
                placeholder="Например: Хочу забронировать 3 билета на 28 января..."
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Отправляем..." : "Отправить запрос"}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Или позвоните нам: <a href="tel:+79035656027" className="text-foreground font-medium hover:text-primary">+7 (903) 565-60-27</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}