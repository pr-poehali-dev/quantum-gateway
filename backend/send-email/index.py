import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


def handler(event: dict, context) -> dict:
    '''API для отправки заявок с сайта на email'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method == 'POST':
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        contact = body.get('email', '')
        message = body.get('message', '')

        if not name or not contact or not message:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Все поля обязательны для заполнения'})
            }

        email_content = f"""
Новая заявка с сайта выставки роботов!

Имя: {name}
Контакт: {contact}

Сообщение:
{message}

---
Отправлено с сайта экспозиции Майнкрафта и Трансформеров
"""

        smtp_server = os.environ.get('SMTP_SERVER', 'smtp.mail.ru')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        recipient_email = os.environ.get('RECIPIENT_EMAIL', 'robotr1@mail.ru')

        if not smtp_user or not smtp_password:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Настройки email не настроены. Позвоните по телефону: +7 (903) 565-60-27'})
            }

        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = recipient_email
        msg['Subject'] = f'Заявка с сайта: {name}'
        msg.attach(MIMEText(email_content, 'plain', 'utf-8'))

        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена!'})
        }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Метод не поддерживается'})
    }
