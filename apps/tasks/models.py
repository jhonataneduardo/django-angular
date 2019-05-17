from django.db import models


PRIORIRY = (
        ('normal', 'Normal'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    )
STATUS = (
    ('pending', 'Pending'),
    ('production', 'Production'),
    ('canceled', 'Canceled'),
    ('completed', 'Completed'),
)

class Task(models.Model):

    title = models.CharField(max_length=85)
    deadline = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    priority = models.CharField(max_length=6, choices=PRIORIRY, default='normal')
    status = models.CharField(max_length=10, choices=STATUS, default='pending')

    def __str__(self):
        return self.title
