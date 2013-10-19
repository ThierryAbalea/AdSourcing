package com.adsourcing.service.mapper;

import com.adsourcing.service.model.Advertiser;
import com.adsourcing.service.model.AdvertiserCampaign;
import com.adsourcing.service.model.Campaign;
import com.adsourcing.service.model.DesignerCampaign;
import com.adsourcing.service.repository.AdvertiserRepository;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class CampaignMapper {

    private AdvertiserRepository advertiserRepository;

    @Inject
    public CampaignMapper(AdvertiserRepository advertiserRepository) {
        this.advertiserRepository = advertiserRepository;
    }

    public Campaign toCampaign(AdvertiserCampaign fromCampaign) {
        Campaign toCampaign = new Campaign();
        toCampaign.setId(fromCampaign.getId());
        Advertiser advertiser = advertiserRepository.findById(fromCampaign.getId());
        toCampaign.setAdvertiser(advertiser);
        toCampaign.setTitle(fromCampaign.getTitle());
        toCampaign.setDescription(fromCampaign.getDescription());
        toCampaign.setTags(fromCampaign.getTags());
        toCampaign.setBudget(fromCampaign.getBudget());
        toCampaign.setStartDate(fromCampaign.getStartDate());
        toCampaign.setEndDate(fromCampaign.getEndDate());
        return toCampaign;
    }

    public AdvertiserCampaign toAdvertiserCampaign(Campaign fromCampaign) {
        AdvertiserCampaign toCampaign = new AdvertiserCampaign();
        toCampaign.setId(fromCampaign.getId());
        toCampaign.setAdvertiserId(fromCampaign.getAdvertiser().getId());
        toCampaign.setTitle(fromCampaign.getTitle());
        toCampaign.setDescription(fromCampaign.getDescription());
        toCampaign.setTags(fromCampaign.getTags());
        toCampaign.setBudget(fromCampaign.getBudget());
        toCampaign.setStartDate(fromCampaign.getStartDate());
        toCampaign.setEndDate(fromCampaign.getEndDate());
        return toCampaign;
    }

    public DesignerCampaign toDesignerCampaign(Campaign fromCampaign) {
        DesignerCampaign toCampaign = new DesignerCampaign();
        toCampaign.setId(toCampaign.getId());
        toCampaign.setAdvertiserId(fromCampaign.getAdvertiser().getId());
        toCampaign.setAdvertiserName(fromCampaign.getAdvertiser().getName());
        toCampaign.setTitle(fromCampaign.getTitle());
        toCampaign.setDescription(fromCampaign.getDescription());
        toCampaign.setTags(fromCampaign.getTags());
        toCampaign.setBudget(fromCampaign.getBudget());
        toCampaign.setStartDate(fromCampaign.getStartDate());
        toCampaign.setEndDate(fromCampaign.getEndDate());
        return toCampaign;
    }
}
