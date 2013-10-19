package com.adsourcing.service.repository;

import com.adsourcing.service.model.Advertiser;
import com.adsourcing.service.model.Campaign;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Date;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;
import static com.google.common.collect.Sets.newHashSet;

@Singleton
public class CampaignData {

    private AdvertiserRepository advertiserRepository;

    @Inject
    public CampaignData(AdvertiserRepository advertiserRepository) {
        this.advertiserRepository = advertiserRepository;
    }

    public List<Campaign> getCampaigns() {
        List<Campaign> campaigns = newArrayList();

        Advertiser sarenza = this.advertiserRepository.findByName("Sarenza");

        Campaign campaign1 = new Campaign();
        campaign1.setAdvertiser(sarenza);
        campaign1.setTitle("Fêtes de Noël");
        campaign1.setDescription("On veut que le Père Noël taffe dur cette année");
        campaign1.setTags(newHashSet("Fête", "Noël", "Hiver"));
        campaign1.setBudget(10000);
        campaign1.setStartDate(new Date(2013, 12, 1));
        campaign1.setEndDate(new Date(2013, 12, 25));
        campaigns.add(campaign1);

        Campaign campaign2 = new Campaign();
        campaign2.setAdvertiser(sarenza);
        campaign2.setTitle("Fêtes des Mères");
        campaign2.setDescription("Rendez Maman heureuse");
        campaign2.setTags(newHashSet("Fête", "Mère"));
        campaign2.setBudget(10000);
        campaign2.setStartDate(new Date(2014, 4, 1));
        campaign2.setEndDate(new Date(2014, 4, 15));
        campaigns.add(campaign2);

        Advertiser cDiscount = this.advertiserRepository.findByName("CDiscount");

        Campaign campaign3 = new Campaign();
        campaign3.setAdvertiser(cDiscount);
        campaign3.setTitle("High tech powa");
        campaign3.setDescription("La grosse promotion annuelle de CDiscount sur le high tech.");
        campaign3.setTags(newHashSet("High Tech", "Geek"));
        campaign3.setBudget(10000);
        campaign3.setStartDate(new Date(2014, 4, 1));
        campaign3.setEndDate(new Date(2014, 4, 15));
        campaigns.add(campaign3);

        return campaigns;
    }
}
