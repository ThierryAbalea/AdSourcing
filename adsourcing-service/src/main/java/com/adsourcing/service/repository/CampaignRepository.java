package com.adsourcing.service.repository;

import com.adsourcing.service.model.Campaign;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

import static com.google.common.collect.Maps.newHashMap;
import static com.google.common.collect.Sets.newHashSet;

@Singleton
public class CampaignRepository {
    private static AtomicInteger NEXT_ID = new AtomicInteger(1);

    private Map<Integer, Campaign> campaigns = newHashMap();

    @Inject
    public CampaignRepository(CampaignData campaignData) {
        initRepository(campaignData);
    }

    private void initRepository(CampaignData campaignData) {
        for (Campaign campaign : campaignData.getCampaigns()) {
            save(campaign);
        }
    }

    public void save(Campaign campaign) {
        if (campaign.getId() == null) {
            Integer id = NEXT_ID.getAndIncrement();
            campaign.setId(id);
        }
        campaigns.put(campaign.getId(), campaign);
    }

    public Campaign findById(int id) {
        return campaigns.get(id);
    }

    public Set<Campaign> findAll() {
        return newHashSet(campaigns.values());
    }

    public Set<Campaign> findByAdvertiserId(int advertiserId) {
        Set<Campaign> results = newHashSet();
        Iterator<Campaign> campaignsIter = campaigns.values().iterator();
        while (campaignsIter.hasNext()) {
            Campaign campaign = campaignsIter.next();
            if (campaign.getAdvertiser().getId().equals(advertiserId)) {
                results.add(campaign);
            }
        }
        return results;
    }
}
