from paypal.standard.models import ST_PP_COMPLETED
from paypal.standard.ipn.signals import valid_ipn_received
from django.dispatch import receiver
from django.conf import settings
import time
from .models import Order

@receiver(valid_ipn_received)
def paypal_payment_received(sender, **kwargs):
    
    time.sleep(5)
    paypal_obj = sender
    my_invoice = str(paypal_obj.invoice)
    
    my_Order = order.objects.get(invoice=my_invoice)

    my_Order.paid = True

    my_Order.save()
