# models.py
from django.db import models

class Prospecto(models.Model):
    customer_id = models.IntegerField()
    customer_age = models.IntegerField()
    dependent_count = models.IntegerField()
    months_on_book = models.IntegerField()
    total_relationship_count = models.IntegerField()
    months_inactive_12_mon = models.IntegerField()
    contacts_count_12_mon = models.IntegerField()
    total_revolving_bal = models.FloatField()
    avg_open_to_buy = models.FloatField()
    total_amt_chng_q4_q1 = models.FloatField()
    total_trans_amt = models.FloatField()
    total_trans_ct = models.IntegerField()
    total_ct_chng_q4_q1 = models.FloatField()
    avg_utilization_ratio = models.FloatField()
    gender_m = models.BooleanField(default=False)
    education_level_doctorate = models.BooleanField(default=False)
    education_level_graduate = models.BooleanField(default=False)
    education_level_high_school = models.BooleanField(default=False)
    education_level_post_graduate = models.BooleanField(default=False)
    education_level_uneducated = models.BooleanField(default=False)
    education_level_unknown = models.BooleanField(default=False)
    marital_status_married = models.BooleanField(default=False)
    marital_status_single = models.BooleanField(default=False)
    marital_status_unknown = models.BooleanField(default=False)
    income_category_40k_60k = models.BooleanField(default=False)
    income_category_60k_80k = models.BooleanField(default=False)
    income_category_80k_120k = models.BooleanField(default=False)
    income_category_less_than_40k = models.BooleanField(default=False)
    income_category_unknown = models.BooleanField(default=False)
    card_category_silver = models.BooleanField(default=False)
    card_category_gold = models.BooleanField(default=False)
    card_category_platinum = models.BooleanField(default=False)

    def __str__(self):
        return f"Prospecto {self.id}"
    
class Status(models.Model):
    statusName                        = models.CharField(max_length = 250)
    url                               = models.CharField(max_length = 250)
    active                            = models.BooleanField(default=False)

    statusName.verbose_name   = 'Estado'
    class Meta:
        verbose_name = "Estado"
        verbose_name_plural = "Estados"
    
    def __str__(self):
        return self.statusName

class Solicitud(models.Model):
    customer_id = models.IntegerField()
    status              = models.ForeignKey(Status ,on_delete=models.RESTRICT,max_length = 250)
    customer_age = models.IntegerField()
    dependent_count = models.IntegerField()
    months_on_book = models.IntegerField()
    total_relationship_count = models.IntegerField()
    months_inactive_12_mon = models.IntegerField()
    contacts_count_12_mon = models.IntegerField()
    total_revolving_bal = models.FloatField()
    avg_open_to_buy = models.FloatField()
    total_amt_chng_q4_q1 = models.FloatField()
    total_trans_amt = models.FloatField()
    total_trans_ct = models.IntegerField()
    total_ct_chng_q4_q1 = models.FloatField()
    avg_utilization_ratio = models.FloatField()
    gender_m = models.BooleanField(default=False)
    education_level_doctorate = models.BooleanField(default=False)
    education_level_graduate = models.BooleanField(default=False)
    education_level_high_school = models.BooleanField(default=False)
    education_level_post_graduate = models.BooleanField(default=False)
    education_level_uneducated = models.BooleanField(default=False)
    education_level_unknown = models.BooleanField(default=False)
    marital_status_married = models.BooleanField(default=False)
    marital_status_single = models.BooleanField(default=False)
    marital_status_unknown = models.BooleanField(default=False)
    income_category_40k_60k = models.BooleanField(default=False)
    income_category_60k_80k = models.BooleanField(default=False)
    income_category_80k_120k = models.BooleanField(default=False)
    income_category_less_than_40k = models.BooleanField(default=False)
    income_category_unknown = models.BooleanField(default=False)
    card_category_silver = models.BooleanField(default=False)
    card_category_gold = models.BooleanField(default=False)
    card_category_platinum = models.BooleanField(default=False)
    credit_limit           = models.FloatField()

    def __str__(self):
        return f"Prospecto {self.id}"
    class Meta:
        verbose_name = "Solicitud"
        verbose_name_plural = "Solicitudes"


